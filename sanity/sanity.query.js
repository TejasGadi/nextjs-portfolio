import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getExperience() {
  return client.fetch(
    groq`*[_type == "experience"]`,{},{ next : { revalidate : 2 }});
}
export async function getProjects() {
  return client.fetch(
    groq`*[_type == "projects"]`,{},{ next : { revalidate : 2 }});
}
export async function getSocials() {
  return client.fetch(
    groq`*[_type == "socials"]`,{},{ next : { revalidate : 0 }});
}
export async function getSkills() {
  return client.fetch(
    groq`*[_type == "skills"]`,{},{ next : { revalidate : 0 }});
}
export async function getAbout() {
  return client.fetch(
    groq`*[_type == "about"]`,{},{ next : { revalidate : 0 }});
}
export async function getEducation() {
  return client.fetch(
    groq`*[_type == "education"]`,{},{ next : { revalidate : 0 }});
}