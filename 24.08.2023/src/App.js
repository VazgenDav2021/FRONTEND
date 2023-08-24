// import { useEffect } from 'react';
// import './App.css';
// import { useForm } from 'react-hook-form'

// function App() {

//   const { register, handleSubmit, watch, formState: { errors, isDirty, dirtyFields, touchedFields }, } = useForm({
//     defaultValues: {
//       email: "example@gmail.com",
//       username: "Jhon Smith",
//       isMale: true
//     }
//   });

//   const { isMale: isMaleTouched } = touchedFields

//   // написали фунцкию "обертку для того чтобы посмотреть какая дата к нам приходит при сабмите формы"
//   const submit = (data) => {
//     const { email, username } = data;
//     localStorage.setItem("email", email);
//     localStorage.setItem("username", username);

//   }

//   const emailValue = watch("email");
//   const isMale = watch("isMale");


//   // это служит для целях демнострации, напрямую изменять цвет body и вообще все манипуляции с DOM не желательны
//   useEffect(() => {
//     if (emailValue?.length >= 3) {
//       document.body.style.background = "red"
//     }
//   }, [emailValue])


//   useEffect(() => {
//     if (isMale && isMaleTouched) {
//       document.body.style.background = 'black'
//     } else if (isMaleTouched && !isMale) {
//       document.body.style.background = 'pink'
//     } else {
//       document.body.style.background = 'white'
//     }
//   }, [isMale, isMaleTouched])

//   return (
//     <form onSubmit={handleSubmit(submit)} style={{ display: "flex", flexDirection: "column", padding: "20px", gap: "20px" }}>
//       <label>Email</label>
//       {/* регистрируем значение в форме задавае что данное поле обязательное, и должно валидироватся по след приницпу */}
//       <input {...register('email', { required: true, pattern: /^\S+@\S+\.\S+$/ })} />
//       {/* если поле email пустое или не соотвестувет валидации то будет ошибка в форме и будет рендерится данный элемент */}
//       {errors.email && <p>Email is required</p>}


//       <label>username</label>
//       {/* регистрируем значение в форме задавае что данное поле обязательное, и должно валидироватся по след приницпу */}
//       <input {...register('username', { required: true })} />
//       {/* если поле email пустое или не соотвестувет валидации то будет ошибка в форме и будет рендерится данный элемент */}
//       {errors.email && <p> username is required</p>}


//       <label>
//         Gender:
//         <input {...register('isMale')} type='checkbox' />
//       </label>

//       <button type='submit'>Send</button>


//     </form>
//   );
// }

// export default App;



// 1. Создать свой форму
// 2. С полями имени сотрудника, зарплаты
// 3.  Есл зарплата больше 10000
// 4. То показывать вне формы текст “богатый”
import { useForm } from "react-hook-form";

function MyForm() {
  // вызывается useForm и делаем деструктуризацию для получения методов и  значениий
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    watch
  } = useForm();

  // объявляем переменную переменную salaryWatch для прослушывания изменений значения salary
  const salaryWatch = watch("salary")
  // логиреум переменную для проверки корректности метода
  console.log(salaryWatch);
  return (
    <form>
      <label> Name :
      {/* регистируем поля как "name" */}
        <input {...register("name")} />
      </label> <br />
      <label> Salary :
        {/* регистируем поля как "salary" */}
        <input {...register("salary")} />
      </label> 
      <br />
      {/* определяем если зп больше 10000 то рендерим элемент p если нет то null */}
      {salaryWatch > 10000 ? <p>Богатый</p> : null}
    </form>
  )
}

export default MyForm;