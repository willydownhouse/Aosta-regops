import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    screenWidth: number;
    colors: {
      error: string;
      bg_nav: string;
      bg_footer: string;
      bg_modal: string;
      btn_main: string;
      btn_text_ligth: string;
      text_nav: string;
      logo_a: string;
    };
    font: {
      base: string;
    };
    input: {
      font_size: string;
      label_font_size: string;
    };
  }
}
