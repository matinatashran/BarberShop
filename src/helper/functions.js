import jalaali from "jalaali-js";

const getMonthShow = (number) => {
    if (number === 0) return 0;
    if (number === -100) return 1;
    if (number === -200) return 2;
    if (number === -300) return 3;
    if (number === -400) return 4;
    if (number === -500) return 5;
    if (number === -600) return 6;
    if (number === -700) return 7;
    if (number === -800) return 8;
    if (number === -900) return 9;
    if (number === -1000) return 10;
    if (number === -1100) return 11;
};

// ##################################

const getFullDate = (y, m, d, locale) => {
    // y: year | m: month | d: day

    let data = { gy: y, gm: m, gd: d };
    if (locale === "fa-IR") {
        data = { ...jalaali.toGregorian(y, m, d) };
        data.gm = data.gm - 1;
    }

    const { gy, gm, gd } = data;

    const dateObject = new Date(gy, gm, gd);
    const fullDate = new Intl.DateTimeFormat("fa-IR-u-nu-latn", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        weekday: "long",
    }).format(dateObject);

    const [dayName, date] = fullDate.split(" ");
    let [year, month, dayNumber] = date.split("/");

    year = Number(year);
    month = Number(month);
    dayNumber = Number(dayNumber);

    return { year, month, dayNumber, dayName };
};

// ##################################

const isFillData = (date, time) => {
    if (
        date.ReYear &&
        date.ReMonth &&
        date.ReDayNumber &&
        date.ReDayName &&
        time
    ) {
        return true;
    } else return false;
};

// ##################################

const saveToLocalStorage = (key, value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
};

// ##################################

const isInLocalStorage = (key) => {
    if (key === "CUSTOMER_DATA") {
        const service = JSON.parse(
            window.localStorage.getItem("reservedService")
        );
        const date = JSON.parse(window.localStorage.getItem("reservedDate"));
        const time = JSON.parse(window.localStorage.getItem("reservedTime"));

        return {
            service: service ? service : "",
            date: date ? date : "",
            time: time ? time : "",
        };
    }
    const data = JSON.parse(window.localStorage.getItem(key));
    if (data) return data;
    else {
        if (key === "reservedTime") return;
        if (key === "reservedDate")
            return {
                ReYear: "",
                ReMonth: "",
                ReDayNumber: "",
                ReDayName: "",
            };
        else return;
    }
};

// ##################################

const deleteFromLocalStorage = (keys) => {
    keys.map((key) => {
        window.localStorage.removeItem(key);
    });
};

// ##################################

const validation = (data, type) => {
    const errors = {};

    if (type === "SIGN-UP") {
        // mobile regex
        const regex = new RegExp("^(\\+98|0)?9\\d{9}$");

        const {
            name,
            lastName,
            email,
            address,
            mobile,
            password,
            confirmPassword,
        } = data;

        if (!name.value.trim()) errors.name = "نام الزامی است";
        else if (name.value.length < 3)
            errors.name = "نام باید بیشتر از دو حرف باشد";
        else delete errors.name;

        if (!lastName.value.trim()) errors.lastName = "نام خانوادگی الزامی است";
        else if (lastName.value.length < 3)
            errors.lastName = "نام خانوادگی باید بیشتر از دو حرف باشد";
        else delete errors.lastName;

        if (!email.value.trim()) errors.email = "ایمیل الزامی است";
        else if (!/\S+@\S+\.\S+/.test(email.value))
            errors.email = "فرمت ایمیل شما صحیح نمی باشد";
        else delete errors.email;

        if (!address.value.trim()) errors.address = "آدرس الزامی است";
        else delete errors.address;

        if (!mobile.value.trim()) errors.mobile = "شماره تماس الزامی است";
        else if (!regex.test(mobile.value))
            errors.mobile = "فرمت شماره تماس صحیح نمی باشد";
        else delete errors.mobile;

        if (!password.value.trim()) errors.password = "کلمه عبور الزامی است";
        else if (password.value.length < 8 || password.value.length > 15)
            errors.password = "کلمه عبور باید بین 8 تا 15 حرف باشد";
        else delete errors.password;

        if (confirmPassword.value !== password.value)
            errors.confirmPassword = "تکرار کلمه عبور صحیح نمی باشد";
        else delete errors.confirmPassword;
    } else {
        // const { email, password } = data;
        // if (!email.value.trim()) errors.email = "ایمیل الزامی است";
        // else if (!/\S+@\S+\.\S+/.test(email.value))
        //     errors.email = "فرمت ایمیل شما صحیح نمی باشد";
        // else delete errors.email;
        // if (!password.value.trim()) errors.password = "کلمه عبور الزامی است";
        // else if (password.value.length < 8 || password.value.length > 15)
        //     errors.password = "کلمه عبور باید بین 8 تا 15 حرف باشد";
        // else delete errors.password;
    }

    return errors;
};

// this function is for return qauantity of products
const qauantityCount = (state, id) => {
    const index = state.selectedItems.findIndex((item) => item.id === id);
    if (index === -1) return false;
    else return state.selectedItems[index].quantity;
};

export {
    getFullDate,
    getMonthShow,
    isFillData,
    saveToLocalStorage,
    isInLocalStorage,
    deleteFromLocalStorage,
    validation,
    qauantityCount,
};
