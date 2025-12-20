import React from "react";
import TitleForBoxesSections from "../../TitleForBoxesSections/TitleForBoxesSections";
import BoxItemsLastOperation from "./BoxItemsLastOperation/BoxItemsLastOperation";

export default function WrapperLastOperation() {
  
  return (
    <div>
      <TitleForBoxesSections title="آخرین تراکنش های سایت" />
      <div className="grid grid-cols-2 gap-3">
        <BoxItemsLastOperation title="محصول جدید  ساعت مچی" time="10" svg="shopping-bag" disc="موجودی 32 عدد"/>
        <BoxItemsLastOperation title="ثبت نام کاربر جدید : آروین علیالی" time="1" svg="user-plus" disc="سطح : مشتری ویژه"/>
        <BoxItemsLastOperation title="سفارش جدید : بهنام" time="22" svg="credit-card" disc="مبلغ 250/000 تومان"/>
        <BoxItemsLastOperation title="ارسال سفارش : 252145" time="54" svg="clipboard-document-check" disc="وضعیت : ارسال شده"/>
        {/* <BoxItemsLastOperation title="نظر جدید : عالی ❤" time="54" svg="chat-bubble-bottom-center-text" disc="کاربر : علی حسینی"/> */}
      </div>
    </div>
  );
}
