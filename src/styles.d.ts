import 'styled-components';

declare module 'styled-components' {
  export interface ITheme {
    colors: {
      cinza: string,
      amarelo: string
    }
  }
}

declare module "*.module.css";
declare module "*.module.scss";

