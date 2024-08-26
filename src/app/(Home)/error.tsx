"use client";
import { ErrorAlert } from "app/components/shared/ErrorAlert";
import { useEffect } from "react";

export default function Error({ error, reset }: ErrorPageProps) {

  useEffect(() => {
    console.log(error)
  }, [])

  return (
    <ErrorAlert reset={reset}/>
  )
}