type Page<Props> = {
  route: string;
  component: React.FC<any>;
  props?: Props;
};
export default Page;
