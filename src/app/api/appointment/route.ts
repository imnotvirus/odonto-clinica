import { firestore } from "@/app/firebase";
import { validateEmail } from "@/utils/validation";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const jsonRequest = await request.json();

  const appointmentToCreate = {
    name: jsonRequest.name,
    email: jsonRequest.email,
    phone: jsonRequest.phone,

    notes: jsonRequest.notes,
  };

  if (!appointmentToCreate.name || !appointmentToCreate.phone) {
    return Response.json(
      {
        message: "Missing fields",
      },
      { status: 400 }
    );
  }

  // TODO: Add validation for email and phone
  if (!validateEmail(appointmentToCreate.email)) {
    return Response.json(
      {
        message: "Invalid email",
      },
      { status: 400 }
    );
  }

  // check if exist appointment with same email
  const appointments = await getDocs(
    collection(firestore, "appointments")
  ).then((snapshopt) => {
    return snapshopt.docs.map((doc) => ({
      collectionId: doc.id,
      appointment: doc.data(),
    }));
  });

  const appointmentExist = appointments.find(
    (appointment) =>
      appointment.appointment.clientEmail === appointmentToCreate.email &&
      appointment.appointment.clientPhone === appointmentToCreate.phone &&
      appointment.appointment.clientName === appointmentToCreate.name &&
      new Date(appointment.appointment.createdAt).getDate() ===
        new Date().getDate() &&
      new Date(appointment.appointment.createdAt).getMonth() ===
        new Date().getMonth() &&
      new Date(appointment.appointment.createdAt).getFullYear() ===
        new Date().getFullYear()
  );

  if (appointmentExist) {
    return Response.json(
      {
        message: "Appointment already exist",
      },
      { status: 400 }
    );
  }

  const docRef = await addDoc(collection(firestore, "appointments"), {
    clientName: appointmentToCreate.name,
    clientEmail: appointmentToCreate.email,
    clientPhone: appointmentToCreate.phone,
    notes: appointmentToCreate.notes,
    createdAt: new Date().toISOString(),
    isContacted: false,
  });

  return Response.json({
    message: "Appointment created successfully",
    data: {
      id: docRef.id,
      appointment: {
        ...appointmentToCreate,
      },
    },
  });
}
