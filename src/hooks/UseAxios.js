import axios from "axios";
import { useEffect } from "react";
import { useSnack } from "../providers/SnackbarProvider";
import { useUser } from "../users/providers/UserProvider";

const useAxios = () => {
  const snack = useSnack();
  const { token } = useUser();

  useEffect(() => {
    axios.defaults.headers.common["x-auth-token"] = token; //2

    const requestInterceptor = axios.interceptors.request.use((data) => {
      return Promise.resolve(data);
    }, null);

    const responseInterceptor = axios.interceptors.response.use(
      null,
      (error) => {
        console.log(error.message);
        snack("error", error.message);
        return Promise.reject(error);
      }
    );

    return () => {
      //4
      axios.interceptors.request.eject(requestInterceptor);
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, [token]); //3
};

export default useAxios;

//תהליך שעובר הקובץ
//האתר עולה
//נכנסנו לעמוד כרטיסים
//useAxios is called
//האפקט רץ, נוצרים 2 אינטרספטורס ומתווסף טוקן  (ריק) להאדר
//נניח שהמשתמש ביצע פעולת התחברות
//הטוקן התעדכן
//איך נגיב?
// 1. נהיה חייבים לעדכן את הטוקן בהאדר
//איך טיפלנו ב1 - הוספנו את הטוקן בדפנדסיס של האפקט
//מה אמור לקרות אם האפקט רץ שוב?
// יווצרו עוד 2 אינטרספטורס
//אז כדי למנוע את זה, כאשר האפקט הקודם נגמר נמחק את האינטרספטורס הישנים
