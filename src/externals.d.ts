declare module '*.less' {
  const resource: { [key: string]: string };
  export = resource;
}

declare interface LayerProps {
  state: string;
  component?: any;
  children?: any;
  data?: any;
}
