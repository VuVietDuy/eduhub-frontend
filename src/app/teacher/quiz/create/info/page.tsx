'use client';
import {fetcher} from '@/api/fetcher';
import Button from '@/components/Button';
import Chips from '@/components/Chips';
import ComboBox from '@/components/ComboBox';
import {MenuProps} from '@/components/MenuProps';
import {
  addQuiz,
  cancelEditingQuiz,
  finishEditingQuiz,
} from '@/redux/slice/quiz.slice';
import {RootState} from '@/redux/store';
import {IQuiz} from '@/types/quiz.type';
import {notification} from '@/utils/notification';
import Image from 'next/image';
import {useRouter} from 'next/navigation';
import {Router} from 'next/router';
import React, {ChangeEvent, useEffect, useRef, useState} from 'react';
import {FaUpload} from 'react-icons/fa6';
import {MdCloudUpload, MdDelete} from 'react-icons/md';
import {useDispatch, useSelector} from 'react-redux';

const grade = [10, 11, 12];

const assignedClassed = ['10A2', '10A4', '10A7', '10A9', '10A3'];

const initState: IQuiz = {
  title: '',
  description: '',
  grade: 0,
  subjectId: '',
  assignedStatus: false,
  topic: [],
  shuffleAnswer: true,
  shuffleQuestion: true,
  // img: '/img/studentCard.jpg',
  timeLimit: 0,
};
export default function page() {
  const listChips = useRef<any>(null);
  const [selectedSubject, setSelectedSubject] =
    useState<string>('Chọn môn học');
  const [formData, setFormData] = useState<IQuiz>(initState);
  const [selectedGrade, setSelectedGrade] = useState<string>('Chọn khối học');
  const [inputValue, setInputValue] = useState<string>('');
  const [keywords, setKeywords] = useState<any>([]);
  const [listSubject, setListSubject] = useState<any>([]);
  const [swapAnswer, setSwapAnswer] = useState<any>('Có');
  const [swapQuestion, setSwapQuestion] = useState<any>('Có');
  const [assigned, setAssigned] = useState<any>('Chưa giao');

  const dispatch = useDispatch();
  const router = useRouter();
  const editingQuiz = useSelector((state: RootState) => state.quiz.editingQuiz);
  const quizList = useSelector((state: RootState) => state.quiz.quizList);

  useEffect(() => {
    setFormData(editingQuiz || initState);
    if (editingQuiz && editingQuiz.subjectId) {
      const subject = listSubject.find(
        (item: any) => item._id === editingQuiz.subjectId,
      );
      console.log('subject: ', subject);
      setSelectedSubject(subject?.name);
    }
    if (editingQuiz && editingQuiz.assignedStatus) {
      if (editingQuiz.assignedStatus) setAssigned('Giao theo lớp');
      else setAssigned('Chưa giao');
    }
    if (editingQuiz && editingQuiz.shuffleAnswer) {
      if (editingQuiz.shuffleAnswer) setSwapAnswer('Có');
      else setSwapAnswer('Không');
    }
    if (editingQuiz && editingQuiz.shuffleQuestion) {
      if (editingQuiz.shuffleQuestion) setSwapQuestion('Có');
      else setSwapQuestion('Không');
    }
    if (editingQuiz && editingQuiz.grade) {
      setSelectedGrade(`Khối ${editingQuiz.grade}`);
    }
    if (editingQuiz && editingQuiz.topic) {
      setKeywords(editingQuiz.topic);
    }
  }, [editingQuiz, listSubject]);

  useEffect(() => {
    fetcher
      .get(`api/subjects`)
      .then((res) => {
        console.log('check  ', res.data.data);
        setListSubject(res.data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const subjectMenu: MenuProps['items'] = listSubject?.map(
    (item: any, index: number) => {
      return {
        key: `${item._id}`,
        label: (
          <button
            className={`px-4 py-2  w-full text-sm text-start hover:bg-slate-100 hover:dark:bg-slate-500 dark:text-gray-50  bg-white shadow-lg shadow-gray-200 dark:bg-gray-700 dark:shadow-gray-900 ${
              index === listSubject.length - 1 ? 'rounded-b-sm' : ''
            }`}
            onClick={() => {
              setFormData((prev) => ({
                ...prev,
                subjectId: item._id,
              }));
              setSelectedSubject(`${item.name}`);
            }}
          >
            {item.name}
          </button>
        ),
      };
    },
  );
  const gradeMenu: MenuProps['items'] = grade.map((item: any, index) => {
    return {
      key: `${item}`,
      label: (
        <button
          className={`px-4 py-2  w-full text-sm text-start hover:bg-slate-100 hover:dark:bg-slate-500 dark:text-gray-50  bg-white shadow-lg shadow-gray-200 dark:bg-gray-700 dark:shadow-gray-900 ${
            index === grade.length - 1 ? 'rounded-b-sm' : ''
          }`}
          onClick={() => {
            setFormData((prev) => ({
              ...prev,
              grade: item,
            }));
            setSelectedGrade(`Khối ${item}`);
          }}
        >
          {item}
        </button>
      ),
    };
  });
  const handleSubmit = () => {
    const data = new FormData();

    console.log('check', formData);
    if (imgUploaded) {
      const blob = new Blob([imgUploaded], {type: 'image/*'});
      data.append('imgURL', blob);
    }

    if (!editingQuiz) {
      const quiz = {
        title: formData.title,
        description: formData.description,
        grade: formData.grade,
        assignedStatus: formData.assignedStatus,
        topic: formData.topic,
        shuffleAnswer: formData.shuffleAnswer,
        shuffleQuestion: formData.shuffleQuestion,
        timeLimit: formData.timeLimit,
        subjectId: formData.subjectId,
        imgURL: '/logo.png',
      };
      fetcher
        .post('api/quizzes', quiz, {
          headers: {'Content-Type': 'application/json;charset=utf-8'},
        })

        .then((res) => {
          console.log(res);
          notification.info({
            message: 'Thành công',
            description: 'Tạo mới đề thi thành công',
          });

          dispatch(addQuiz(quiz));
        });
    } else {
      const quiz = {
        _id: editingQuiz._id,
        title: formData.title,
        description: formData.description,
        grade: formData.grade,
        assignedStatus: formData.assignedStatus,
        topic: formData.topic,
        shuffleAnswer: formData.shuffleAnswer,
        shuffleQuestion: formData.shuffleQuestion,
        timeLimit: formData.timeLimit,
        subjectId: formData.subjectId,
        imgURL: '/logo.png',
      };
      console.log('checkquiz', quiz);
      fetcher
        .put(`api/quizzes`, quiz, {
          headers: {'Content-Type': 'application/json;charset=utf-8'},
        })

        .then((res) => {
          notification.info({
            message: 'Thành công',
            description: 'Chỉnh sửa thông tin đề thi thành công',
          });

          dispatch(finishEditingQuiz(quiz));
        });
    }
    router.push('/teacher/quiz/create/question');
  };

  const handleCancel = () => {
    dispatch(cancelEditingQuiz());
    router.push('/teacher/quiz');
  };

  const handleDeleteChips = (index: number) => {
    console.log('check:', index);

    const newKeywords = keywords;
    newKeywords.splice(index, 1);
    console.log('check new:', newKeywords);
    setKeywords((prevState: any) => {
      console.log(newKeywords);

      return newKeywords;
    });
  };

  //Image upload
  const [imgUploaded, setImgUploaded] = useState<ArrayBuffer | null | string>(
    null,
  );
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImgUploaded(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  // console.log(`${listChips?.current?.offsetWidth}px`);

  console.log('check formData: ', formData);
  return (
    <div className="md:max-h-100%  overflow-y-scroll h-[calc(100vh-205px)] px-4">
      {/* Info form  */}
      <fieldset className=" border-1 rounded-4 md:mt-2 px-3 md:pt-2 md:pb-4 md:px-8 mb-5  border border-gray-300 h-fit overflow-y-hidden">
        <legend className="text-lg text-gray-600 dark:text-gray-300">
          Thông tin chung{' '}
        </legend>
        <div className="grid grid-col-1 md:grid-cols-3 mt-5 md:gap-10 gap-3">
          <div className="col-span-1 h-[250px] md:h-[360px] text-gray-600 dark:text-gray-300 group md:px-4">
            {/* Upload avatar  */}
            <div className="  w-full border border-dotted border-gray-300 dark:border-gray-600 h-[200px] rounded-[4px]">
              <div className="cursor-pointer w-full h-full flex justify-center items-center">
                {imgUploaded ? (
                  <div className="flex items-center justify-center relative w-full h-full overflow-hidden ">
                    <Image
                      width={160}
                      height={150}
                      src={imgUploaded as string}
                      alt="Selected"
                      className="object-contain max-w-[200px]"
                    />
                    <button
                      className="absolute bottom-4 right-4 p-3 rounded-full bg-red-500 cursor-pointer outline-none border-none hover:shadow-me duration-200 transition-all ease-in-out"
                      onClick={() => setImgUploaded(null)}
                    >
                      <MdDelete className="text-white" />
                    </button>
                  </div>
                ) : (
                  <label className="cursor-pointer">
                    <div className="flex flex-col items-center justify-center h-full">
                      <div className="flex flex-col justify-center items-center">
                        <FaUpload className="text-4xl text-gray-600 dark:text-gray-200 " />
                        <p className="text-lg mt-3 align-middle">
                          Nhấn để thêm ảnh
                        </p>
                      </div>
                    </div>
                    <input
                      type="file"
                      name="upload-file"
                      //Nếu isImage=true thì chấp nhận mọi file có có type là image. Ngược lại các file có type là audio
                      accept="image/*"
                      className="w-0 h-0 cursor-pointer"
                      onChange={(e) => handleImageChange(e)}
                    />
                  </label>
                )}
              </div>
              <h3 className="text-center mt-4">Ảnh đại diện</h3>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2 ">
            <div className="mb-3 md:mb-5 text-gray-300 ">
              <label
                htmlFor="test-title"
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-300"
              >
                Tên
              </label>
              <input
                value={formData.title}
                type="text"
                id="text-title"
                className="bg-gray-50 border border-gray-300 text-textColor  text-sm rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Nhập tên đề thi"
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    title: e.target.value,
                  }))
                }
                required
              />
            </div>
            <div className="mb-3 md:mb-5  ">
              <label
                htmlFor="test-desc"
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-300 "
              >
                Mô tả
              </label>
              <textarea
                id="test-desc"
                value={formData.description}
                className="bg-gray-50 border border-gray-300  text-sm rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Nhập mô tả bài thi"
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
              ></textarea>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-3 md:mb-5 mb-3 ">
              <div className="col-span-1">
                <label
                  htmlFor="test-title"
                  className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-300"
                >
                  Môn học
                </label>
                <ComboBox
                  menu={subjectMenu}
                  selectedOption={selectedSubject}
                  width={'w-full'}
                  className="bg-gray-50 dark:bg-gray-700 dark:border-gray-600 "
                ></ComboBox>
              </div>
              <div className="col-span-1">
                <label
                  htmlFor="test-title"
                  className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-300"
                >
                  Khối học
                </label>
                <ComboBox
                  menu={gradeMenu}
                  selectedOption={selectedGrade}
                  width={'w-full'}
                  className="bg-gray-50 dark:bg-gray-700 dark:border-gray-600 "
                ></ComboBox>
              </div>
            </div>
            <div className="mb-5">
              <label
                htmlFor="test-title"
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-300"
              >
                Chủ đề
                {/* <i>(*)Thông tin bắt buôcj</i> */}
              </label>
              <div className="bg-gray-50 border border-gray-300  text-sm rounded-[4px] focus:ring-blue-500 focus:border-blue-500 flex items-center flex-wrap gap-1 w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {keywords.length > 0 && (
                  <div ref={listChips} className="ml-3  flex flex-wrap   w-fit">
                    {keywords?.map((item: any, index: number) => {
                      return (
                        <Chips
                          content={item}
                          onRemove={() => handleDeleteChips(index)}
                        />
                      );
                    })}
                  </div>
                )}
                <input
                  value={inputValue}
                  onChange={(e) => {
                    setInputValue(e.target.value);
                  }}
                  onKeyUp={(e) => {
                    if (e.keyCode === 13) {
                      setKeywords([...keywords, inputValue]);
                      setFormData((prev) => ({
                        ...prev,
                        topic: [...prev.topic, inputValue],
                      }));
                      setInputValue('');
                    }
                  }}
                  // onBlur={() => {
                  //   setKeywords([...keywords, inputValue]);
                  //   setInputValue('');
                  // }}
                  type="text"
                  id="text-title"
                  className={`block bg-gray-50 border border-gray-300  text-sm rounded-[4px] focus:ring-blue-500 focus:border-blue-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none ${
                    keywords.length === 0 ? 'w-full' : `flex-1 border-none`
                  }`}
                  placeholder="Nhập từ khoá liên quan"
                  required
                />
              </div>
            </div>

            {/* <div className="mt-[70px] w-full flex justify-end mr-4"></div> */}
          </div>
        </div>
      </fieldset>

      {/* Config form  */}
      <fieldset className=" border-1 rounded-4 pb-2 pt-4 px-3 md:px-8 mb-5  border border-gray-300 overfloy-y-hidden">
        <legend className="text-lg text-gray-600 dark:text-gray-300">
          Cài đặt đề thi{' '}
        </legend>
        <div className="grid gap-4 md:gap-3 md:grid-cols-1  mb-5 ">
          <div className="col-span-1 grid items-center md:grid-cols-4 grid-cols-1">
            <label
              htmlFor="test-title"
              className="block col-span-1  mb-2 text-sm font-medium text-gray-600 dark:text-gray-300 "
            >
              Thời gian làm bài (số phút)
            </label>
            <input
              type="text"
              id="text-title"
              value={
                formData.timeLimit === 0 ? '' : formData.timeLimit.toString()
              }
              className="col-span-1 md:col-span-3 bg-gray-50 border border-gray-300  text-sm rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 flex-3"
              placeholder="Nhập thời gian làm bài"
              required
              onChange={(e) =>
                setFormData((prev) => {
                  if (e.target.value === '') {
                    return {
                      ...prev,
                      timeLimit: 0,
                    };
                  } else {
                    return {
                      ...prev,
                      timeLimit: parseInt(e.target.value),
                    };
                  }
                })
              }
            />
          </div>

          <div className="col-span-1 grid md:grid-cols-4 md:mt-3   gap-4">
            <label
              htmlFor="test-title"
              className="block col-span-1 md:mb-2 md:mr-4 text-sm font-medium text-gray-600 dark:text-gray-300"
            >
              Cho phép đảo câu hỏi
            </label>
            <div className="col-span-3">
              <div className="flex gap-8  ">
                <div className="flex  items-center gap-4">
                  <input
                    type="radio"
                    checked={swapQuestion === 'Có' ? true : false}
                    name="question"
                    id="yes"
                    className="w-5 h-5  text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-600 dark:border-gray-500"
                    onChange={(e) => {
                      setFormData((prev) => ({
                        ...prev,
                        shuffleQuestion: true,
                      }));
                      setSwapQuestion('Có');
                    }}
                  />
                  <label htmlFor="" className="text-sm">
                    Có
                  </label>
                </div>
                <div className="flex  items-center gap-4">
                  <input
                    type="radio"
                    checked={swapQuestion === 'Không' ? true : false}
                    name="question"
                    id="yes"
                    className="w-5 h-5  text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-600 dark:border-gray-500"
                    onChange={(e) => {
                      setFormData((prev) => ({
                        ...prev,
                        shuffleQuestion: false,
                      }));
                      setSwapQuestion('Không');
                    }}
                  />
                  <label htmlFor="" className="text-sm">
                    Không
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 grid md:grid-cols-4 md:mt-3   gap-4">
            <label
              htmlFor="test-title"
              className="block col-span-1 md:mb-2 md:mr-4 text-sm font-medium text-gray-600 dark:text-gray-300"
            >
              Cho phép đảo đáp án
            </label>
            <div className="col-span-3">
              <div className="flex gap-8  ">
                <div className="flex  items-center gap-4">
                  <input
                    type="radio"
                    checked={swapAnswer === 'Có' ? true : false}
                    name="answer"
                    className="w-5 h-5  text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-600 dark:border-gray-500"
                    onChange={() => {
                      setFormData((prev) => ({
                        ...prev,
                        shuffleAnswer: true,
                      }));
                      setSwapAnswer('Có');
                    }}
                  />
                  <label htmlFor="" className="text-sm">
                    Có
                  </label>
                </div>
                <div className="flex  items-center gap-4">
                  <input
                    type="radio"
                    // checked={swapAnswer === 'Không' ? true : false}
                    name="answer"
                    className="w-5 h-5  text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-600 dark:border-gray-500"
                    onChange={() => {
                      setFormData((prev) => ({
                        ...prev,
                        shuffleAnswer: false,
                      }));
                      setSwapAnswer('Không');
                    }}
                  />
                  <label htmlFor="" className="text-sm">
                    Không
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Assigned Status  */}
          <div className="col-span-1 grid md:grid-cols-4 md:mt-3   gap-4">
            <label
              htmlFor="test-title"
              className="block col-span-1 md:mb-2 md:mr-4 text-sm font-medium text-gray-600 dark:text-gray-300"
            >
              Trạng thái
            </label>
            <div className="col-span-3">
              <div className="flex gap-8  ">
                <div className="flex  items-center gap-4">
                  <input
                    type="radio"
                    name="list"
                    checked={assigned === 'Chưa giao' ? true : false}
                    className="w-5 h-5  text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-600 dark:border-gray-500"
                    onChange={(e) => {
                      setFormData((prev) => ({
                        ...prev,
                        assignedStatus: false,
                      }));
                      setAssigned('Chưa giao');
                    }}
                  />
                  <label htmlFor="" className="text-sm">
                    Chưa giao
                  </label>
                </div>

                <div className="flex  items-center gap-4">
                  <input
                    type="radio"
                    name="list"
                    checked={assigned === 'Giao theo lớp' ? true : false}
                    className="w-5 h-5  text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-600 dark:border-gray-500"
                    onChange={(e) => {
                      setFormData((prev) => ({
                        ...prev,
                        assignedStatus: true,
                      }));
                      setAssigned('Giao theo lớp');
                    }}
                  />
                  <label htmlFor="" className="text-sm">
                    Giao theo lớp
                  </label>
                </div>
              </div>
            </div>
          </div>
          {assigned === 'Giao theo lớp' && (
            <div className="col-span-1 grid md:grid-cols-4 md:mt-3   gap-4">
              <label
                htmlFor="test-title"
                className="block col-span-1 md:mb-2 md:mr-4 text-sm font-medium text-gray-600 dark:text-gray-300"
              >
                Chọn lớp giao
              </label>
              <div className="col-span-3 grid gap-3 lg:grid-cols-4 grid-cols-3">
                {assignedClassed?.map((item, index) => (
                  <div
                    key={index}
                    className="col-span-1 items-center flex gap-2 item-center"
                  >
                    <input
                      type="checkbox"
                      // checked={answer.isCorrect}
                      name="list-checkbox"
                      className="w-5 h-5  text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-600 dark:border-gray-500"
                      onChange={() => {}}
                    />
                    <label htmlFor="" className="text-sm">
                      {item}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </fieldset>

      <Button className="float-end mr-3" type="green" onClick={handleSubmit}>
        Xác nhận
        {/* <Link href="/teacher/quiz/create/question">
          Xác nhận
          </Link> */}
      </Button>
      {editingQuiz && (
        <Button className="float-end mr-3" type="blue" onClick={handleCancel}>
          Huỷ bỏ
          {/* <Link href="/teacher/quiz/create/question">
          Xác nhận
          </Link> */}
        </Button>
      )}
    </div>
  );
}
