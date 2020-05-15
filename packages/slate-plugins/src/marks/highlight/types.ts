export const MARK_HIGHLIGHT = 'highlight';

export interface RenderLeafHighlightOptions {
  typeHighlight?: string;

  /**
   * Background color of the highlighted ranges
   */
  bg?: string;
}

export interface HighlightPluginOptions extends RenderLeafHighlightOptions {}
