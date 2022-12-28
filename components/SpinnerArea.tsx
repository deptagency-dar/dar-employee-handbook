import { Loading } from "./Loading";

export const Spinner = () => {
  return (
    <div
      role="status"
      className="fixed top-0 left-0 flex h-full w-full items-center justify-center"
    >
      <div className="bg-sky-500 from-sky-500 flex h-14 w-14 animate-spin items-center justify-center rounded-full bg-gradient-to-tr to-white">
        <div className="h-12 w-12 rounded-full bg-white"></div>
      </div>
    </div>
  );
};
interface Props {
  children: React.ReactNode;
  loading: boolean;
}

const SpinnerArea = ({ loading = false, children }: Props) => (
  <>
    {loading && <Loading />}
    <div className={loading ? "opacity-25" : ""}>{children}</div>
  </>
);

export default SpinnerArea;
