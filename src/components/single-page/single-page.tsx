import { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { IProduct } from "../../interface/product";
import { GetById } from "../../services/product.service";

const ProductSingle = () => {
  const location = useLocation();
  const { keywords } = location.state || {};
  const [product, setProduct] = useState<IProduct | null>(null);
  const { id } = useParams();
  // console.log(id);

  useEffect(() => {
    (async () => {
      const data = await GetById(id as string | number);
      setProduct(data);
    })();
  }, [id]);

  return (
    <>
      <div>
        <div className="flex w-full p-8 mx-auto">
          <div className="mx-auto">
            <img
              src={product?.image}
              alt="Main Product Image"
              className="w-[335px] h-[335px]"
            />
            <div className="flex mx-auto mt-4 space-x-12">
              <img
                src={product?.image}
                alt="Thumbnail 1"
                className="object-contain w-16 border-2 border-gray-300 h-14"
              />
              <img
                src={product?.image}
                alt="Thumbnail 2"
                className="object-contain w-16 ml-2 h-14"
              />
              <img
                src={product?.image}
                alt="Thumbnail 3"
                className="object-contain w-16 ml-2 h-14"
              />
            </div>
          </div>

          <div className="w-1/2 mx-auto ">
            <h2 className="absolute text-sm text-gray-600 uppercase">Plant</h2>
            <h1 className="mt-12 text-3xl font-bold">{product?.name}</h1>
            <p className="mt-8 text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the...
            </p>
            <div className="flex items-center mt-4">
              <span className="text-2xl font-bold">${product?.price}</span>
              <span className="ml-4 text-gray-400 line-through">$250.00</span>
              <span className="ml-2 text-green-500">50% OFF</span>
            </div>
            <div className="flex items-center mt-12">
              <div className="flex items-center border border-gray-300 rounded">
                <button className="px-3 py-1 text-gray-700">-</button>
                <input
                  type="text"
                  id="quantity"
                  className="w-12 text-center border-l border-r border-gray-300"
                  value="1"
                />
                <button className="px-3 py-1 text-gray-700">+</button>
              </div>
              <button className="px-4 py-2 ml-4 text-white bg-green-500 rounded hover:bg-green-600">
                Add to cart
              </button>
            </div>
          </div>
        </div>
        {/* end */}
        <div className="w-[1400px] p-6 mx-auto">
          <h2 className="text-[20px] font-semibold text-green-600 underline-gradient">
            Description
          </h2>
          <p className="[margin-block-start:0] [margin-block-end:9px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the
          </p>
          <p className="[margin-block-start:0] [margin-block-end:9px]">
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of
          </p>
          <p className="m-0">type and scrambled i</p>
        </div>
        {/* end */}
        <div className="w-[1400px] p-6 mx-auto">
          <h2 className="text-[20px] font-semibold text-green-600 underline-gradient">
            About
          </h2>
          <p className="[margin-block-start:0] [margin-block-end:9px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled i
          </p>
          <p className="[margin-block-start:0] [margin-block-end:9px]">
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of
          </p>
          <p className="m-0">type and scrambled i</p>
        </div>
        {/* end */}
        <div className="flex justify-between w-full p-16 mx-auto ">
          <div className="flex justify-center space-x-6">
            <img
              src="/public/ffef-2@2x.png"
              alt="Product Image"
              className="w-[183px] h-[183px"
            />
            <div className="mt-8 ">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <span className="text-xl text-gray-700">★★★★★</span>
                </div>
                <div className="text-2xl font-bold text-green-500">5.0</div>
                <div className="text-gray-500">(388)</div>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <button className="px-4 py-2 text-white bg-green-500 rounded">
              Write reviews
            </button>
          </div>
        </div>
        <div className="p-16 mx-auto">
          <div>
            <div className="flex items-center">
              <div className="text-gray-600">5 ★</div>
              <div className="w-3/5 bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-yellow-500 h-2.5 rounded-full"
                  style={{ width: "100%" }}
                ></div>
              </div>
            </div>
            <div className="flex items-center mt-2">
              <div className="text-gray-600">4 ★</div>
              <div className="w-3/5 bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-yellow-500 h-2.5 rounded-full"
                  style={{ width: "10%" }}
                ></div>
              </div>
            </div>
            <div className="flex items-center mt-2">
              <div className="text-gray-600">3 ★</div>
              <div className="w-3/5 bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-yellow-500 h-2.5 rounded-full"
                  style={{ width: "0%" }}
                ></div>
              </div>
            </div>
            <div className="flex items-center mt-2">
              <div className="text-gray-600">2 ★</div>
              <div className="w-3/5 bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-yellow-500 h-2.5 rounded-full"
                  style={{ width: "0%" }}
                ></div>
              </div>
            </div>
            <div className="flex items-center mt-2">
              <div className="text-gray-600">1 ★</div>
              <div className="w-3/5 bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-yellow-500 h-2.5 rounded-full"
                  style={{ width: "0%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        {/* end */}
        <div className="container p-16 mx-auto">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="p-4 ">
              <div className="flex items-center mb-2">
                <h3 className="text-lg font-semibold text-green-600">
                  Aman gupta
                </h3>
                <span className="ml-2 text-black">★★★★★</span>
              </div>
              <p className="text-gray-700">
                I've been using this cleanser for about five or six months now
                and my acne is almost completely gone. I really struggled for
                years with my skin and tried everything possible but this is the
                only thing that managed to clear up my skin. 100% recommend and
                will continue to use is for sure.
              </p>
            </div>
            <div className="p-4 ">
              <div className="flex items-center mb-2">
                <h3 className="text-lg font-semibold text-green-600">
                  Aman gupta
                </h3>
                <span className="ml-2 text-black">★★★★★</span>
              </div>
              <p className="text-gray-700">
                I've been using this cleanser for about five or six months now
                and my acne is almost completely gone. I really struggled for
                years with my skin and tried everything possible but this is the
                only thing that managed to clear up my skin. 100% recommend and
                will continue to use is for sure.
              </p>
            </div>
            <div className="p-4 ">
              <div className="flex items-center mb-2">
                <h3 className="text-lg font-semibold text-green-600">
                  Aman gupta
                </h3>
                <span className="ml-2 text-black">★★★★★</span>
              </div>
              <p className="text-gray-700">
                I've been using this cleanser for about five or six months now
                and my acne is almost completely gone. I really struggled for
                years with my skin and tried everything possible but this is the
                only thing that managed to clear up my skin. 100% recommend and
                will continue to use is for sure.
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <button className="px-4 py-2 text-white bg-green-600 rounded">
              See all
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSingle;
