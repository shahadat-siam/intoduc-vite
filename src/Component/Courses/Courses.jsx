import { IoIosBook } from "react-icons/io";
const Courses = ({course,hundleCourseBtn}) => {

    const {name,description,photo,price,credit} = course;

    return (
        <div className="mx-auto">
            <div class="card p-2 bg-gray-300 shadow-xl">
            <img src={photo} alt="" />
            <div class="card-body p-3">
                <h2 class="card-title">{name}</h2>
                <p className="text-justify">{description}</p>
                <div className="flex   items-center w-full">
                    <p>$ {price}</p>
                    <p className="flex items-center px-1"><IoIosBook/> Book {credit}</p>
                </div>
                <div class="card-actions justify-end">
                <button onClick={() => hundleCourseBtn(course)} class="btn btn-primary w-full">Select</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Courses;