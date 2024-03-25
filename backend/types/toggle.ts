export type RawApps = Record<string, Record<string, boolean>>;
export type Toggle = {
  name: string;
  value: boolean;
}
export type App = {
  name: string;
  toggles: Toggle[];
};
export type Apps = App[];
