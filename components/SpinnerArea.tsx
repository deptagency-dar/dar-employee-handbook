import { Loading } from "./Loading";

export const Spinner = () => {
    return (
        <div role="status" className="fixed top-0 left-0 w-full h-full flex items-center justify-center" >
            <div className="flex items-center justify-center rounded-full w-14 h-14 bg-sky-500 bg-gradient-to-tr from-sky-500 to-white animate-spin" >
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
        {loading ? (
            <>
                <Loading />
                <div className="opacity-25">{children}</div>
            </>
        ) : children}
    </>
);

export default SpinnerArea;
