import { Button, Result } from 'antd';
import { Link, useRouteError } from 'react-router-dom';

export const ErrorPage = (): JSX.Element => {
  const error = useRouteError() as any;

  return (
    <Result
      status="500"
      title="500"
      subTitle={error.message}
      extra={
        <Link to="/">
          <Button type="primary">Back Home</Button>
        </Link>
      }
    />
  );
};
