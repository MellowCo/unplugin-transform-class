import { describe, expect, it } from 'vitest'
import { cacheRestoreSelector, cacheTransformEscapESelector, cacheTransformSelector } from '../src/utils'

describe('vue', () => {
  it('transformSelector', () => {
    expect(cacheTransformSelector('bg-[#452233]:50')).toMatchInlineSnapshot('"bg-_lfl__wn_452233_lfr__cl_50"')
    expect(cacheTransformSelector('bg-[url(https://test.unocss.png)]')).toMatchInlineSnapshot('"bg-_lfl_url_lbl_https_cl__sl__sl_test_dl_unocss_dl_png_lbr__lfr_"')
    expect(cacheTransformSelector('shape-[from_3.1416rad_at_10%_50%]')).toMatchInlineSnapshot('"shape-_lfl_from_3_dl_1416rad_at_10_pes__50_pes__lfr_"')
  })

  it('transformEscapESelector', () => {
    expect(cacheTransformEscapESelector('.bg-\\[\\#452233\\]\\:50')).toMatchInlineSnapshot('".bg-_lfl__wn_452233_lfr__cl_50"')
    expect(cacheTransformEscapESelector('.border-x-\\[rgb\\(1\\,2\\,3\\)\\]\\/\\[0\\.5\\]')).toMatchInlineSnapshot('".border-x-_lfl_rgb_lbl_1_lco_2_lco_3_lbr__lfr__sl__lfl_0_dl_5_lfr_"')
  })

  it('restoreSelector', () => {
    expect(cacheRestoreSelector('.bg-_lfl__wn_452233_lfr__cl_50')).toMatchInlineSnapshot('".bg-[#452233]:50"')
    expect(cacheRestoreSelector('.shape-_lfl_from_3_dl_1416rad_at_10_pes__50_pes__lfr_')).toMatchInlineSnapshot('".shape-[from_3.1416rad_at_10%_50%]"')
  })
})
