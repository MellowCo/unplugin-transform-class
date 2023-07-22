import { describe, expect, it } from 'vitest'
import { restoreSelector, transformEscapESelector, transformSelector } from '../src/utils'

describe('vue', () => {
  it('transformSelector', () => {
    expect(transformSelector('bg-[#452233]:50')).toMatchInlineSnapshot('"bg-_lfl__wn_452233_lfr__cl_50"')
  })

  it('transformEscapESelector', () => {
    expect(transformEscapESelector('.bg-\\[\\#452233\\]\\:50')).toMatchInlineSnapshot('".bg-_lfl__wn_452233_lfr__cl_50"')
  })

  it('restoreSelector', () => {
    expect(restoreSelector('.bg-_lfl__wn_452233_lfr__cl_50')).toMatchInlineSnapshot('".bg-[#452233]:50"')
  })
})
