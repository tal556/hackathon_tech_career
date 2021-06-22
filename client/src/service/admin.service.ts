import { API } from "../app.utils";
import axios from "axios";
import 'firebase/firestore';
import 'firebase/database';
import firebase from 'firebase/app';
import init from '.././Firebase'

init();

const headers = {
  headers: {
    Authorization:localStorage.getItem("token"),
  },
};

export async function getAllCourses() {
  return await (await axios.get(`${API}/courses/all`, headers)).data.data;
}

export async function getAllJobOffers() {
  var userDataRef = await firebase.database().ref('jobs/jobOffers' );
  userDataRef.once('value', (snapshot) => {
    const jobOffers = snapshot.val();
    return jobOffers;
});

  
}

export async function getGraduatesByCourse(courseId: string){

  return await (await axios.get(`${API}/students/getByCourseId/${courseId}`,headers)).data.data;

}


export async function getStudentById(Id: string) {
  try {
      if (Id.length === 24) {
          return await(await axios.get(`${API}/students/student/${Id}`,headers)).data.data;
      }
      return 'bad id, check id'
  }
  catch (err) { console.error(err) }
}

