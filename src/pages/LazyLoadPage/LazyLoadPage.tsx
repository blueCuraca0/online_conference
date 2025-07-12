import { FC, ReactNode, Suspense } from "react";
import { EmptyPageLoader } from "components/EmptyPageLoader";

interface LazyLoadPageProps {
  children: ReactNode;
}

const LazyLoadPage: FC<LazyLoadPageProps> = ({ children }) => {
  return <Suspense fallback={<EmptyPageLoader />}>{children}</Suspense>;
};

export default LazyLoadPage;
