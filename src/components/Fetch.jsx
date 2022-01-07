import { useFetch } from "../Hooks/CustomHooks";

export function Fetch() {
  const { data, loading, error } = useFetch(
    "https://json-server-deploy-mock.herokuapp.com/items"
  );
  if (error) {
    return <div>...Error</div>;
  }

  if (loading) {
    return <div>...loading</div>;
  }

  return (
    <div>
      {data?.map((item) => {
        return (
          <div key={item.id}>
            {item.name}-{item.price}
          </div>
        );
      })}
    </div>
  );
}
