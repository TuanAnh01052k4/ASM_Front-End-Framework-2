import { Link, Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <div className="flex min-h-screen">
      <aside className="flex flex-col w-64 text-white bg-[#043c29]">
        <div className="flex items-center justify-center h-16 text-2xl font-bold">
          TRANG QUẢN TRỊ
        </div>
        <nav className="flex-grow ">
          <ul>
            <li>
              <Link to="" className="block py-2.5 px-4 hover:bg-[#062e20]">
                Danh Sách Sản Phẩm
              </Link>
            </li>
            <li>
              <Link to="add" className="block py-2.5 px-4 hover:bg-[#062e20]">
                Thêm Sản Phẩm
              </Link>
            </li>
            <li>
              <Link
                to="list-category"
                className="block py-2.5 px-4 hover:bg-[#062e20]"
              >
                Danh Sách Danh Mục
              </Link>
            </li>
            <li>
              <Link
                to="add-category"
                className="block py-2.5 px-4 hover:bg-[#062e20]"
              >
                Thêm Danh Mục
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-grow p-6 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default Admin;
