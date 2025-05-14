import { auth } from "@/auth";
import RouterWrapper from "@/components/admin/router.wrapper.replace";
import UserTable from "@/components/admin/user.table";
import { sendRequest } from "@/utils/api";

interface IProps {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

const ManageUserPage = async (props: IProps) => {
  const current = props?.searchParams?.current ?? 1;
  const pageSize = props?.searchParams?.pageSize ?? 10;
  const session = await auth();

  const res = await sendRequest<IBackendRes<any>>({
    url: `/v1/users`,
    method: "GET",
    queryParams: {
      current: current,
      pageSize,
    },
    headers: {
      Authorization: `Bearer ${session?.user?.access_token}`,
    },
    nextOption: {
      next: { tags: ["list-users"] },
    },
  });

  return (
    <div>
      <RouterWrapper current={+current} pageSize={+pageSize} data={res?.data} />
      <UserTable users={res?.data?.results ?? []} meta={res?.data?.meta} />
    </div>
  );
};

export default ManageUserPage;
