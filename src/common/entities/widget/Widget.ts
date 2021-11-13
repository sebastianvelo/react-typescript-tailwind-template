interface Widget {
  uiType: string;
  id?: string;
  data?: { [key: string]: any };
  children?: Widget[];
}

export default Widget;
