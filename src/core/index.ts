import { trim } from '@meoc/utils'
import { cacheTransformSelector, defaultRules } from '../utils'
import type { ClassNameMatcher } from '../types'

/**
 * 获取class
 */
export function getClass(code: string, classNameMatcher: ClassNameMatcher) {
  const matches: string[][] = []
  const attrNameReg = classNameMatcher instanceof RegExp
    ? classNameMatcher
    : new RegExp(String.raw`${classNameMatcher}`)
  const classReg = new RegExp(String.raw`\s:?(${attrNameReg.source})="(?<classNames>[\s\S]*?)"`, 'g')

  // vue
  Array.from(code.matchAll(classReg)).forEach((m) => {
    const classStr = m.groups?.classNames as string
    const sourceStr = trim(m[0])

    let classArr = [sourceStr]

    // 是否为动态class :class
    if (sourceStr.startsWith(':')) {
      if (classStr.startsWith('{'))
        classArr = classArr.concat(getObjClass(classStr))
      else if (classStr.startsWith('['))
        classArr = classArr.concat(getArrClass(classStr))
    }
    else {
      classArr.push(classStr)
    }

    matches.push(classArr)
  })

  // react className="xxxx"
  Array.from(code.matchAll(/className=["']([\s\S]*?)["']/g)).forEach((m) => {
    matches.push([m[0], m[1]])
  })

  // className={xxxx}
  Array.from(code.matchAll(/className=[{]([\s\S]*?)[}]/g)).forEach((m) => {
    matches.push([m[0], ...Array.from(m[1].matchAll(/["']([\s\S]+?)["']/g)).map(v => v[1])])
  })

  return matches
}

export function getObjClass(className: string) {
  // class="{ 'bg-teal-200:55': title === 'Hello', 'h-1.000%': title === 'Hello' }"
  // => ['bg-teal-200:55','h-1.000%']
  return Array.from(className.matchAll(/'([^']+?)'\s*:/g)).map(v => v[1])
}

export function getArrClass(className: string) {
  // [
  //   title === '2.3' ? 'font-$font-name bg-teal-200:55' :'tracking-[2/5]',
  //   isFont ? 'font-$font-name' : 'tracking-[2/5]'
  // ]
  // => ['font-$font-name bg-teal-200:55', 'tracking-[2/5]','font-$font-name', 'tracking-[2/5]']
  return Array.from(className.matchAll(/(?<=[\?\:&])\s*'(.*?)'/g)).map(v => v[1])
}

export function transformCode(code: string, rules = defaultRules, classNameMatcher: ClassNameMatcher) {
  const classNames = getClass(code, classNameMatcher)

  classNames.forEach((c) => {
    let currentClass = c[0]
    c.slice(1).forEach((selector) => {
      currentClass = currentClass.replace(selector, cacheTransformSelector(selector, rules))
    })
    code = code.replace(c[0], currentClass)
  })

  return code
}
