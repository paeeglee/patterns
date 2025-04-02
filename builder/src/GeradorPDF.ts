export default class GeradorPDF {
  private pageOrientation: string = "portrait";
  private unit: string = "mm";
  private pageSizeX: number = 210;
  private pageSizeY: number = 297;
  private marginTop: number = 0;
  private marginRight: number = 0;
  private marginBottom: number = 0;
  private marginLeft: number = 0;
  private hasHeader: boolean = true;
  private headerHight: number = 15;
  private hasFooter: boolean = true;
  private footerHight: number = 15;
  private pageColor: string = "#ffffff";
  private encode: string = "UTF-8";

  setPageOrientation(value: string) {
    this.pageOrientation = value;
  }

  getPageOrientation(): string {
    return this.pageOrientation;
  }

  setUnit(value: string) {
    this.unit = value;
  }

  getUnit(): string {
    return this.unit;
  }

  setPageSizeX(value: number) {
    this.pageSizeX = value;
  }

  getPageSizeX(): number {
    return this.pageSizeX;
  }

  setPageSizeY(value: number) {
    this.pageSizeY = value;
  }

  getPageSizeY(): number {
    return this.pageSizeY;
  }

  setMarginTop(value: number) {
    this.marginTop = value;
  }

  getMarginTop(): number {
    return this.marginTop;
  }

  setMarginRight(value: number) {
    this.marginRight = value;
  }

  getMarginRight(): number {
    return this.marginRight;
  }

  setMarginBottom(value: number) {
    this.marginBottom = value;
  }

  getMarginBottom(): number {
    return this.marginBottom;
  }

  setMarginLeft(value: number) {
    this.marginLeft = value;
  }

  getMarginLeft(): number {
    return this.marginLeft;
  }

  setHasHeader(value: boolean) {
    this.hasHeader = value;
  }

  getHasHeader(): boolean {
    return this.hasHeader;
  }

  setHeaderHight(value: number) {
    this.headerHight = value;
  }

  getHeaderHight(): number {
    return this.headerHight;
  }

  setHasFooter(value: boolean) {
    this.hasFooter = value;
  }

  getHasFooter(): boolean {
    return this.hasFooter;
  }

  setFooterHight(value: number) {
    this.footerHight = value;
  }

  getFooterHight(): number {
    return this.footerHight;
  }

  setPageColor(value: string) {
    this.pageColor = value;
  }

  getPageColor(): string {
    return this.pageColor;
  }

  setEncode(value: string) {
    this.encode = value;
  }

  getEncode(): string {
    return this.encode;
  }

  toString(): string {
    return `
pageOrientation = ${this.pageOrientation};
unit = ${this.unit};
pageSizeX = ${this.pageSizeX};
pageSizeY = ${this.pageSizeY};
marginTop = ${this.marginTop};
marginRight = ${this.marginRight};
marginBottom = ${this.marginBottom};
marginLeft = ${this.marginLeft};
hasHeader = ${this.hasHeader};
headerHight = ${this.headerHight};
hasFooter = ${this.hasFooter};
footerHight = ${this.footerHight};
pageColor = ${this.pageColor};
encode = ${this.encode};
    `;
  }
}
