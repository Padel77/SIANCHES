import { useState } from "react";
import Image from "next/image";
import { toast } from "sonner";

import { handleAddToCard, handleUpdateCart } from "@/lib/action";

import FormSubmittingButton from "@/components/forms/FormSubmittingButton";
import RadioGroupInputs from "@/components/helper/RadioGroupInputs";
import ProductCheckedBox from "@/components/product/ProductCheckedBox";
import { cn, Expired_time } from "@/lib/utils";
import { setCookie } from "cookies-next";

export default function AddToCartForm({ Form_details }) {
  let defaultSizes = Form_details?.mail_details?.questions?.at(0)?.extras.filter((item) => item.title == Form_details?.mail_details?.size);
  let choices_ids = (Form_details?.extra_details || defaultSizes)?.map((item) => item)
  let Required_Choices = Form_details?.mail_details?.questions?.filter((item) => item.click == "CHECK");
  let Optional_Choices = Form_details?.mail_details?.questions?.filter((item) => item.click == "OPTIONAL");

  const [checkedData, setCheckedData] = useState(choices_ids || []);

  const handleGroupRadioInputChange = (event) => {
    let Filter_data = Required_Choices?.map(data => data?.extras.filter(item => item.id == +event));
    let Product_type = Filter_data?.filter(item => item?.length > 0)?.at(0)?.at(0);
    let PostChecked_data = checkedData.filter(item => item.type !== Product_type?.type);
    setCheckedData([...PostChecked_data, Product_type]);
  };

  const handleCheckedChange = (id, checked) => {
    let Filter_data = Optional_Choices?.map(data => data?.extras.filter(item => item.id == id));
    if (!Filter_data?.flat()?.length) {
      return;
    } else {
      if (checked) {
        setCheckedData((prev) => [...prev, Filter_data?.flat()?.at(0)]);
      } else {
        setCheckedData((prev) => prev.filter((item) => item.id !== id));
      }
    }
  };

  const addToCardAction = async () => {
    let FormData = {
      product_id: Form_details?.mail_details?.id,
      extras_ids: checkedData?.map(item => item.id),
      quantity: 1,
    };
    await handleAddToCard(FormData).then((res) => {
      res?.error && toast.error(res.error);
      if (res?.success) {
        setCookie('session', res?.data?.session_key, Expired_time)
        toast.success(res.success);
        Form_details?.handleCloseDialog();
      }
    });
  };

  function isItemsUpdated(defaultData, data) {
    let default_data_ids = defaultData.map(item => item.id);
    let data_ids = data.map(item => item.id);

    // Check if arrays have the same length
    if (default_data_ids.length !== data_ids.length) {
      return false; // Arrays have different lengths, so they are not identical
    }

    // Check if every id in data_ids is in default_data_ids
    let isSame = data_ids.every(item => default_data_ids.includes(item));

    // Additionally, check if every id in default_data_ids is in data_ids to ensure no items are missing
    isSame = isSame && default_data_ids.every(item => data_ids.includes(item));

    return isSame; // Return true if arrays are identical, false otherwise
  }

  const updateCartAction = async () => {
    // check if form is empty before trying to update cart.
    if (isItemsUpdated(choices_ids, checkedData)) {
      return toast.warning("Nothing to update !!");
    }

    let body = {
      cart_item_id: Form_details?.cart_id,
      extras_ids: checkedData?.map(item => item.id),
      quantity: Form_details?.cart_qty,
    };
    await handleUpdateCart(body).then((res) => {
      res?.error && toast.error(res.error);
      if (res?.success) {
        toast.success(res.success);
        Form_details?.handleCloseDialog();
      }
    });
  };

  return (
    <form
      action={
        Form_details?.cart_id
          ? updateCartAction
          : addToCardAction
      }
      className="grid grid-cols-1 md:grid-cols-2"
    >
      {/* Product`s Extra Feature  */}
      <div className="min-h-[80%] max-h-[80%] overflow-visible md:overflow-auto order-2 md:order-1">
        {Required_Choices?.map((item, index) => (
          <div key={index} className="my-4 ">
            <RadioGroupInputs
              inputs_details={item}
              handleChange={handleGroupRadioInputChange}
              choiceDefaultValue={Form_details?.extra_details || defaultSizes}
            />
          </div>
        ))}
        {
          Optional_Choices?.map((item, index) => (
            <div key={index} className="my-4 ">
              <ProductCheckedBox
                inputs_details={item}
                handleChange={handleCheckedChange}
                choiceDefaultValue={choices_ids}
              />
            </div>
          ))
        }
        <footer className={cn("my-8 flex md:hidden items-center justify-center w-full", !Form_details?.cart_id && Form_details?.mail_details?.quantity === 0 && 'hidden')}>
          <FormSubmittingButton name={
            Form_details?.cart_id
              ? "Update Item"
              : "Add to cart"
          } />
        </footer>
      </div>
      {/* Product Image & Description */}
      <div className="flex items-center flex-col gap-5 order-1 md:order-2">
        <Image
          src={Form_details?.mail_details?.image}
          alt="product-image"
          className="flex justify-center items-center object-cover rounded-full w-[140px] h-[140px]"
          height={140}
          width={140}
        />
        <h2 className="text-2xl font-medium tracking-wider">
          {Form_details?.mail_details?.title}
        </h2>
        <p className="text-lg font-semibold w-[400px] max-w-full text-center line-clamp-4 text-gray-500">
          {Form_details?.mail_details?.description}
        </p>
        <footer className={cn("my-8 hidden md:flex items-center justify-center w-full", !Form_details?.cart_id && Form_details?.mail_details?.quantity === 0 && 'md:hidden')}>
          <FormSubmittingButton
            name={
              Form_details?.cart_id
                ? "Update Item"
                : "Add to cart"
            }
          />
        </footer>
      </div>
    </form>
  );
}
