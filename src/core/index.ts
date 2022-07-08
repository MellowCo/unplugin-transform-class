/**
 * 获取class
 * @param code - 源码
 */
export function getClass(code: string) {
  const matchs: string[][] = []
  // vue
  Array.from(code.matchAll(/class="((?:\n|.)+?)"/g)).forEach((m) => {
    const classStr = m[1]
    let classArr = [m[0]]
    if (classStr.startsWith('{'))
      classArr = classArr.concat(getObjClass(classStr))
    else if (classStr.startsWith('['))
      classArr = classArr.concat(getArrClass(classStr))
    else
      classArr.push(classStr)
    matchs.push(classArr)
  })
  // jsx tsx
  Array.from(code.matchAll(/className=["']((?:\n|.)+?)["']/g)).forEach((m) => {
    matchs.push([m[0], m[1]])
  })
  return matchs
}

export function getObjClass(className: string) {
  // class="{ 'bg-teal-200:55': title === 'Hello', 'h-1.000%': title === 'Hello' }"
  // => ['bg-teal-200:55','h-1.000%']
  return Array.from(className.matchAll(/'([^,]+?)'\s*:/g)).map(v => v[1])
}

export function getArrClass(className: string) {
  // [
  //   title === '2.3' ? 'font-$font-name bg-teal-200:55' :'tracking-[2/5]',
  //   isFont ? 'font-$font-name' : 'tracking-[2/5]'
  // ]
  // => ['font-$font-name bg-teal-200:55', 'tracking-[2/5]','font-$font-name tracking-[2/5]']
  return Array.from(className.matchAll(/(?<=[\?\:])\s*'(.+?)'/g)).map(v => v[1])
}

const transformRules: Record<string, string> = {
  '.': '-d-',
  '/': '-s-',
  ':': '-c-',
  '%': '-p-',
  '!': '-e-',
  '#': '-w-',
  '(': '-bl-',
  ')': '-br-',
  '[': '-fl-',
  ']': '-fr-',
  '$': '-r-',
}

export function transformCode(code: string) {
  const classNames = getClass(code)
  classNames.forEach((c) => {
    let newClass = c[0]
    c.slice(1).forEach((v) => {
      newClass = newClass.replace(v, transformSelector(v, false))
    })
    code = code.replace(c[0], newClass)
  })

  return code
}

export function transformSelector(selector: string, hasEscape = true) {
  const prefix = hasEscape ? '\\' : ''
  const start = selector.startsWith('.')

  if (start)
    selector = selector.slice(1)

  if (/[\.\/:%!#\(\)\[\]$]/.test(selector)) {
    for (const transformRule in transformRules)
      selector = selector.replaceAll(`${prefix}${transformRule}`, transformRules[transformRule])
  }

  return start ? `.${selector}` : selector
}

