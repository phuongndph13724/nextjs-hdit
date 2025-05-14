import { auth } from "@/auth";
import AdminContent from "@/components/layout/admin.content";
import AdminFooter from "@/components/layout/admin.footer";
import AdminHeader from "@/components/layout/admin.header";
import AdminSideBar from "@/components/layout/admin.sidebar";
import { AdminContextProvider } from "@/library/admin.context";
import { sendRequest } from "@/utils/api";

const AdminLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const session = await auth();
  const userInfo = await sendRequest<IBackendRes<any>>({
    url: `/v1/auth/checkToken`,
    method: "GET",
    // queryParams: {
    //   current,
    //   pageSize,
    // },
    headers: {
      Authorization: `Bearer ${session?.user?.access_token}`,
    },
    // nextOption: {
    //   next: { tags: ["list-users"] },
    // },
  });
  return (
    <AdminContextProvider>
      <div style={{ display: "flex" }}>
        <div className="left-side" style={{ minWidth: 80 }}>
          <AdminSideBar />
        </div>
        <div className="right-side" style={{ flex: 1 }}>
          <AdminHeader userInfo={userInfo?.data} />
          <AdminContent>{children}</AdminContent>
          <AdminFooter />
        </div>
      </div>
    </AdminContextProvider>
  );
};

export default AdminLayout;
