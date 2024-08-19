import { ToastError, ToastSuccess } from "@/components/ui/toast";
import { useEffect, useState } from "react";

const API = process.env.EXPO_PUBLIC_API_URL;

export const getDataRickyAndMortyAPI = async (): Promise<APIResponse> => { 
  try {
    const res = await fetch(API!, {
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    ToastError("Error", "Error fetching data");
    throw error;
  }
}

export interface APIResponse {
  info: Info;
  results: Result[];
}

export interface Info {
  count: number;
  next: string;
  pages: number;
  prev: null;
}

export interface Result {
  created: Date;
  episode: string[];
  gender: Gender;
  id: number;
  image: string;
  location: Location;
  name: string;
  origin: Location;
  species: Species;
  status: Status;
  type: string;
  url: string;
}

export enum Gender {
  Female = "Female",
  Male = "Male",
  Unknown = "unknown",
}

export interface Location {
  name: string;
  url: string;
}

export enum Species {
  Alien = "Alien",
  Human = "Human",
}

export enum Status {
  Alive = "Alive",
  Dead = "Dead",
  Unknown = "unknown",
}
