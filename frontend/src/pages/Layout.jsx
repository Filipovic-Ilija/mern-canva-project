import React, { useState } from "react";
import { FaFolderOpen, FaHome } from "react-icons/fa";
import { LuLayoutTemplate } from "react-icons/lu";
import {
  Link,
  Navigate,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";

const Layout = () => {
  const [show, setShow] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const create = () => {
    navigate("/design/create", {
      state: {
        type: "create",
        width: 600,
        height: 450,
      },
    });
  };

  const logout = () => {
    localStorage.removeItem("canva_token");
    window.location.href = "/";
  };

  return (
    <div className="bg-[#18191b] min-h-screen w-full ">
      <div className="bg-[#212223] shadow-md fixed left-0 top-0 w-full z-20">
        <div className="w-[93%] m-auto py-3">
          <div className="flex justify-between items-center">
            <div className="w-[80px] h-[48px]">
              <img
                className="w-full h-full"
                src="https://static.canva.com/web/images/12487a1e0770d29351bd4ce4f87ec8fe.svg"
              />
            </div>
            <div className="flex gap-4 justify-center items-center relative">
              <button
                onClick={create}
                className="py-2 px-2 overflow-hidden text-center bg-[#8b3dff] text-white rounded-[3px] font-medium"
              >
                Create a Design
              </button>
              <div onClick={() => setShow(!show)} className="cursor-pointer">
                <img
                  className="w-[48px] h-[45px] rounded-full"
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSEhIVFRUVFRUVFRUVFRUVFRUVFRUXFhUXFxUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0lHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAACAQMEBQYABwj/xAA/EAABAwIEBAQEAwcCBQUAAAABAAIDBBEFEiExBkFRYRMicYEykaGxUsHRBxQjQnLh8BViM0OCosMWVJKzwv/EABgBAAMBAQAAAAAAAAAAAAAAAAABAgME/8QAIBEBAQACAgMBAQEBAAAAAAAAAAECEQMhEjFBUTJhIv/aAAwDAQACEQMRAD8A1wCILgEQVJKEQCQIggFAS2XAIgg3AJbLkqCJZclSoAVxSlZzGeMqaG7WPEsmwaw6X/3O2CLdHrbQOIG6EOB2IK80kxOqqHZ3v8gPwxkZQO4sSfdTxK+RtgSwjZzCR87BZXljScdb0oA4Fecx4hWwPs+R7mE2zG7mi+2vL8ldx41LGxrmsD2j4m7HXmDsQd05y40rx1qyEBCq6PiSGTclh6OGl/UaD3VnHIHC7SCOxv8AZaS7RohCEhOEISgjJCBwTxCAhAMkJshPuCBwQDDgm3BPEIHJgw5qZc1SXBNuagI+VcnMq5BaaEIwkCMBJTgEQCQIggFAShcAiQHWXJQuQTlGra6OJpfI4NaNyep2HqouMYwynjdI8+Vo9yegXmdTiElbN4rzaMOALATZma+UkcwQD5uoISuWlSbTeMeI55z4cVxB/NlIu/Kdc3MDbRZvDKFsr8psLncjTbTUa/Zat1C2FwcLW0aS74SQNCfwuLTvtoQs65gp58ub+GXXYXbWJ+DMNrE2uD0WVtrSSRfRUslLqWZmC2ty4W/qHm+Y/VW0sUczBJE9zHC9pGusQRuC38tNOaCCo8RuRxIPIHX5OG476LL1rpaSRz4w/KfiDvNG4a/EA2/PQggjqo9rbehqXH+HIAXAX2GWVnNzOvpukkporERkC4uAOXdvUdQvP4+KHsOZhOW93Rkg5D1Y7p22PPXVSajikPHS5zBwNsrxz02Pfvr3XgJkXGXPhf5szSfhkZqHDoRsfb5Ktjx58bszHBkl75m3Af8A1N2PuFZQ47HO009Vufgfa5vrY2HPa42PKxWYxGhLHZQb/W45Fp2cPr2VY9XtOXceocP8cxzWjlGSTvo1x/2k/ZaqOZrtj69QvnoxyN/lcB3BA9iVoOH+LKmIhgOb+q5NulyVvKysezFA4KrwHHm1LL5XMcNCCNPZw0Vsmk2QgITpCBwQDJagcE64IHBMGSE24J9yAhAM5VyOy5AXgCIJLIggyhEEgRBIFCVIiCA5NVMmVpJNtN+g5p1ZP9oGM+BTuy/E7Qdh19UW6Em2H46x/wAaUNYbMZ8Pr+JV2D1pBJIL2kEG3fcW5cj6gdFTjEiTdzb3N7WBv1vorikhif543GN3e5b89x7gjusb17axfYdirnc84HzLRuHN5OG/QjN0R1mCxTtJbYDq12gvtdjyMvz9CqGpoagFsjQCQQWvjOu+mrT9laUuJyfEY8jt3FhLST1DLfbnfTmVv8PX6rv9Oq6bVjrsGzXZXN9hmPbZSG8SzM0myc/LYn6POg9CPVXVPxJbRz82mxbY272sSqjGp2Sf8NjTe3wtyHTkd779e6Vy/TmP4zeJ1cTzfww0nctuB67u+6qzpq037HmrZ+EuNyGlC3AnluYBVMsYLhkq/EJFinf3t1spN+5sVOdgzhrZRnYeU/LGp8LDTpXHck+9/wDPVPYfq8evqossRbofYqTQ5g4W1I20VJr1DhKSzms5bEbHa40PL9VsyvO+FsTBkAmJaSRkJGnoDyXoQKqIpCgKdKAhMjTkDgnCEBTBpyBydKbcEA2uRWSoC6CIBCESDEEqQIkgUJQkShBFXj/7T63PPk5A/a1yvXyvEOOXA1Mg3cHG/YW0A/NTkrFmHO5/IdApFJVzbMdYdMrD87jUfRRizM7KOtlueF+Fs5BcNFnnlI1wx2z9HTSudo54J3ynLf1tyWnoMCmdbM8kf7g123qFvqLhtjALNGyuKfDAOSxttbTUYul4dc7c6c9B9ldQ8NtaBotZDQ25J19Npsn4jzZL/QmAHyhM0uBsAIyha2Sn0UcwKbicyrJVGCMsRlCohw63U27Le1EJUZ1LYFSrbx/iTA8oNh3Cy8BLfZew49SAtK8nxFvhyOC24st9MOXH6nQVpsLHbXVeqcH1vjQBxOo8pB12XikU9tR3Xq37M33gd/UVtjO2OTYlAUZQFWgBCBycKApg2U24J0ptyAbXJVyAuQjCAIggCCJCEoSAglCREgAmdZpI3AO+y+fcbrTJK951cXEnkL3/ALL6ELbrwTiumEdXOwDQPJt0zWd+aVOO4Nw7xZrnl917hg2HgAaLy39msF3Od3Xs1AQ1ouubPvJ1YdYpkUClMhUJ+JRt/mHzTAxyP8bfmg18xgXFqpo8Wadin24gE9xPjU0wqLLEE1JiYHNVtTj8Tb5pGi29zsldKkqXNEoVQ1RJOIods4N+6F2Kxn+ZRYqM9xDIAD7ryLiLV69V4qOgI2PNeU4z8eqvinaOX0q43cl6x+yokwydM+nrYA/YLyY6FeufstjIpibaFxsev+arpjmrbFAjKEppAUBRlA5AAU24JwoSmDdlyW65AWoRAoQlCDGCiCAIggDCIIAiCQEF4Xx/ERXVFh8T2W73Y0addl7k/bReTcc1jBWskym8cjM4FrkNs7QpU8ZsfBOL01LDlmkyy5iXMDXEttpqQLD5rVf+pc4/hwznoSGM+j5GkrB4Nh7zXwPkawMqGyTREAAHK11rjk4GxI7gq9xN8jCQzzyH8OoHqeqxz1K6MN2drCvp5ZxcukYL3+KIadNHFZarogyTSqkzDq2NwFu7Jb8vwpKvCqyRuZ2cuvsTpY32vpvZRI+Ham7i+NzTrYCxsRa1raIkmvibbv6vsLx1zCG+K13u5v8A2vAP0W4pKlzmhw1HY3HzXmVNhUrmuZNG4WF/MLXFtweo6q04U/ZfU1lMKkVDIGyjM1pY9znN5POVwADtwNdCFPhjfq7nlGjxnFXt2I9S9rQPVziAFjKymklJJnjAJzf814F+7GFv1VTWYC+iqJKeUNMkdi1zfhcH3s9t9dR7ixCb/cZZX2LXAE/EWm3rfmqmGMTc8rEgYeWnSqaewD/l/g5qdR1r4RYvJHo8D6tsqGSGoheWBhtm38MFpAPW2vJSzM9pAc3KdNgQ30LeXsnlInHKrj/Wg4Fpde/UjQ/NZniIag9VMxSEGNziNQL356crqNgTo2Me6VpDXNsMwzNdr/K22/dPHGe4eeXyqXde3cGReHSRN/23PvqvG6YNdK2w8mcac8ub9F7TQygNFtrCy1jCrwFcUzA+6dKCCUBRlCUwbKEhGUBSAbLly5MLQJQhCIIMSIIbpQgCCJCEqQEvNeN8OayofJb4mCw76gm3oAvSVj/2hYa+RgdGCXt81hzAGo+qnP0vj+q2mAZTUNU7aklb4h6QTDwpD6C7Hey9EfhDXDQW7i2vvzWR4QcDAwFoLXRAOaRcEG4cCDuDrotXh2HRxtDYZZ4WjZjJA9jR0ayZrw0dhZYXV9uibk3FbJgNQ0nJICOjmX+yEYDKdZZM1uTRkb+p+avnRO/97L7xU5P/ANYUKqidYk1dQezW07f/ABXRqQ/LK/FBjlA3IKZhtLVHwWW3ZGdZ5ewazMb9S0c16FhbAyPI0Waxoa0dGtFmj5BZLhnDY2zST6mWQBmZ73SPEbTfLmcTYEm5AsNBotdF5Wu9ESlli8v46omOroJH2DHfwHno513Q3PIXzt9XBPNwQgWDiLbW/RTOL6Zrg8TAeHK3wyD31HodLg9lFwBsnhhrakhwAH8VjZ2m2gIN2vI9XEqZkq4/Yg1mHVH4I3+5aflqFVT4NO4+ZjGgchcn7LdiCp5y0zu/gys+njOUeopKo/8AMpm9/Alf9PFCev8ARL/jzbiXC8sYY1uV00jYwB31cfYAqo4jgDI2gbA2A7WsF6JiOF2d4s0viyNaWs8gjZHm+MsYCTc2AuXE2Xn/ABXKLNHUqsL8Z8k62oKVtnNI/EPuvVKCo0C80pBe3ZwWyoqrutsWGc6jbUcysQVmcNqFfwvurQfKbJRlAUgAlCURQlMBuuSWXIC0SoQiCDEiCAIkASIIUQSBVGrmaXte32KkIJ75Tbe3zU5zcXx5ayZjAJW2ttYuH/cf1WmglCwUNSYpJGn8WYD10I+gVjFjWUX+y57068WwmnsNVUVNa592x6nmsbiHEkl8ucnMfK3mOy1vDDcrATq46nRTbtfUaXBaZkUYG7yAXuO9zrb0GytHyiy8V4l4wnpK+QNALGublabglrmhxF76i5PLRWzf2iteA4FoFtQSAQehBVasRdW+2v4ljhljMcujCQSQbEWNwbrLYdEYHPj1cxji0P6iwIt7ELGcR8cmd2Rjbs5kkgH6Xt8lqODsW8alPiaubI75Gxb8tvZTcbrdOZS9RqYXA6hJPPbmss/GRE/ITodl1XjGmiW1ahOIsSIFgvO8akzyW6Aadzr+a0dZWZ3a7LNRvzPc61y5xt+S1wmo587vLQaUZd+WqtqOoVRUPA8o9z3TtNKtsWOd3Wzw2q1WtoZrhedYbPqtnhc9wrZtBmSJuNycSAShKIoHJgi5IuQaxBRhA1ECgDCUIbpQUgMJQUKW6AJc4pFzkExHHkIaGSjQ5sjj1Dhp9QFU093MJG9louNIs0D7bgZh/wBJushglaGuAO1vayx5Y34cu0HCXtzeI+7pM5AFtgCdBf8AzdbzCceDgQ4WPIfL/PdMwYJBIT5RZ4F+vdQcT4Klj81NO7+l/mHz3WMu28jP8eBssocNy37bX+YFlipWlpsVvKvBq3QuETrHc3b+qqMVwKobZ0kbDfQFjmO//Vx7hbYbkLPivtl7LV4BiboIntGxyut32+32VV+4yjQsa311PyCsKbCppPK1wF7DRvfujL0jHjynZyvxUS6PAvy5HTbUJ/DHudESSTlOW/Xn+au4uF4ooi4nM4auJ1ubXtf6qtxesZHCI2CxJubc3G32WW5eod67qlqqohruXTuqz97OUNAA0tfmnKsWA/zVQwujGdMLlRAqRE5RwnIyqQu8PetbhU+yxtAtLhz9lSWzppNFKBVRRSqzY5BjKFyUoCUBy5IuQFiEQTYRhBjCIFAClCQGlQpQgCukcVyFxQFDjvwkdQV5fEckvh3+EkC/Q6j816djx8pXnGLQZiXjdn1HP3Sym4eN1Wx4eqr2Gtxax7LZeIctwvMuGMRAcATsLA9Ry+i9Mw59xYrks1XXLuKzEq2w8wWDxfEYwbhupNtdDf8ARer1GFteNQspivBcTpM/09v7pzaplZOqw0UwNrjfbv6K3wzMTZugVyeHI2gDU22+3+eiKWnbEzy6E6BLKnu/aouIsTytyNNg0a9yd/VYqWo8R1zsNvZWfEk13hjT/nM/dUYYb5BuVrhj05s8t0M0uY9kKWSPKSOiQLaMqIJyMJsJ6IaoJa0IV5RlU9E1XNOFSV/Qyq5hfos5SOV3TPQE66QlC0pSUGW65CkQFiEV0AKUIM4ESAFEkBgpQhSgoBULylQuQFFjg8pWGA1f6fmt7i4u0rFxQ+d/9P5pZfyeH9RmJ3GJ1xte4tyP6Lb8P8WizWuNjre/pdZHEqbUhVxbl1buNwVjqZRt3jXtsXEbSPi0Ud2OhxI2Xk9PWvNjrzvY7fqn4cTcL5i7Q8gDfXqo8Kuckb2rx1gG9rbbfZZXGOJM2YA7XsqGoqnOBvz1177WUEgOJueSqYfqcuT8NeOTcu6KbhkFvOdz9Ao4hzOt81ZtFrBVlUYRT1vxu9U0FIxIWkco4Wk9M77GE9DumApECZLqiCuIAqeiVzAqSnQFW1LIqiNT6dyAuI3Ii5RY3p4IM5mXIFyAsWowU0CjCDOBFdNhKEA5dECm0oSA0Lkt0D0BWYiNCsxDF53+n5rU1o0VLFAbuPXRTyX/AJq+P+oocSpL3VBUUvPZbephuFSVNKDuFz411ZY7ZSxDjv8AklM9hm2KuZKC57dlBqsNPLZaeTHxqs/eDc9wkjBJ/RTHUPNPw0nX6I3E+NJSQ2BJG6djZcp9zNLJ6nh0UWtZipMYpzcOHTVVoWunguq+owW+rdFePJPVZ58dvcUjVJgClx4BMfhsT0vYlNupHxm0jC09x+a1l36Y2aWVErmnVNSK2p1SVhGpULlDjT7CgLKJ6lMeq6JykRlBpmZco11yBtctKMFMtKMFIzoKW6bBRAoAwUYTYKONpcbAEnoEAt0UcDnmzQT9lbUGBudq/QdFfwUrWts0WRsMbPhwaPNq76BUlWwXsNlscbjsb9fuFk6kalc3Jba6eOTSqkYq2qhVxKFFmZcKI32o3xqO9vZWr41CmYmlVyM7JGNUt0aHImnSOGXKlwMQxtUuKNTVQ0+NPwQXT/haKXTwqQGjpPO23Ufda2TCmSNs9oN9NQq/BqXM8dtVpwyy34vTn5fbz6s4HIuYXf8ASf1VXLhssPxsI7jUfNersjXPpWu0IuttsdPK40+0ra4jwtG/Vnld229ws1XYJNFu3MOo1+iradI0T1JY5QGuUiNyAmZguTF1yDXjSnAUw0pwIM8CiBXU8DnmzRf7LRYdgobYu1P0CQVuH4Y+Q9B1WqosPZELAa8yn4Yw0aJxqWz0UBC07juiKCQJBExalztNvUeqwlVEQSvRI338p9lQY7hOa72DXmOv91GeO+2mGWumJmaoz26KyqIt1XStsVg6JVfMFCkVlUNVdKgIbwkypXbpyOElMBjap1NGlpqQkq5pKJSNo0VOpUFOrCOlV5hmFWs9w9B+ZVY4bRlnomD0ORlzudT26BSrXKkS/hHv27JsNXTJqac9u6JjU4GpGhOBBODUj4QdwnAiQFBiPDkUmtrHqNFmcQ4fki1b5h9f7r0UhNvjT2Wnlnhu/C7/AOJSL0791b0HyXJ+ReLGtToXLkzajh/4B7q9hXLlNOHxsiakXJARSOXLkBEfu3+oJ2bmuXJhicY/4rvUqiqly5cuXt1YeldUKrnXLkloo3VnS7LlyKaxo9/f81b0qVclEZLOh+NvqtGuXLo4/Tn5PaFH/N/UVyVctEHGoguXJAYRhIuQCoSuXIMK5cuQT//Z"
                />
              </div>

              <div
                className={`absolute top-[60px] right-0 w-[250px] bg-[#313030] p-3 border border-gray-700 transition duration-500 ${
                  show ? "visible opacity-100" : "invisible opacity-30"
                }`}
              >
                <div className="px-2 py-2 flex justify-start gap-5 items-center">
                  <img
                    className="w-[40px] h-[40px] rounded-full"
                    src="data:image/jpeg;base64,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"
                  />
                  <div className="flex justify-center flex-col items-start">
                    <span className="text-[#e0dddd] font-bold text-md">
                      Markus
                    </span>
                    <span className="text-[#e0dddd] font-bold text-md">
                      markus@gmail.com
                    </span>
                  </div>
                </div>

                <ul className="text-[#e0dddd] font-semibold">
                  <li>
                    <Link className="p-2 cursor-pointer">
                      <span>Setting</span>
                    </Link>
                  </li>
                  <li>
                    <div onClick={logout} className="p-2 cursor-pointer">
                      <span>Logout</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex mt-16">
        <div className="sidebar w-[300px] p-5 h-[calc(100vh-70px)] fixed bg-[#34569f]">
          <div className="px-2 py-2 flex justify-start gap-5 items-center mb-3">
            <img
              className="w-[40px] h-[40px] rounded-full"
              src="data:image/jpeg;base64,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"
              alt="image"
            />
            <div className="flex justify-center flex-col items-start">
              <span className="text-[#e0dddd] font-bold text-md">
                Markus Delhi
              </span>
              <span className="text-[#e0dddd] text-sm">Free</span>
            </div>
          </div>

          <ul className="px-4 flex flex-col gap-2">
            <li>
              <Link
                to="/"
                className={`text-[#e0dddd] px-2 py-2 flex justify-start items-center gap-2 ${
                  pathname === "/" ? "bg-[#ffffff26]" : ""
                } rounded-md`}
              >
                <span className="text-xl">
                  <FaHome />
                </span>
                <span className="font-medium">Home</span>
              </Link>
            </li>

            <li>
              <Link
                to="/projects"
                className={`text-[#e0dddd] px-2 py-2 flex justify-start items-center gap-2 ${
                  pathname === "/projects" ? "bg-[#ffffff26]" : ""
                } rounded-md`}
              >
                <span className="text-xl">
                  <FaFolderOpen />
                </span>
                <span className="font-medium">Projects</span>
              </Link>
            </li>

            <li>
              <Link
                to="/templates"
                className={`text-[#e0dddd] px-2 py-2 flex justify-start items-center gap-2 ${
                  pathname === "/templates" ? "bg-[#ffffff26]" : ""
                } rounded-md`}
              >
                <span className="text-xl">
                  <LuLayoutTemplate />
                </span>
                <span className="font-medium">Templates</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="ml-[300px] w-[calc(100% - 300px)]">
        <div className="py-4 pr-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
