import { auth, firestore } from "@/app/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const session = await getServerSession();
  const user = session?.user;

  if (!user) {
    return Response.json(
      {
        message: "Unauthorized",
      },
      { status: 401 }
    );
  }

  const doctors = await getDocs(collection(firestore, "doctors")).then(
    (snapshot) => {
      return snapshot.docs.map((doc) => ({
        collectionId: doc.id,
        user: doc.data(),
      }));
    }
  );

  return Response.json(doctors);
}

export async function POST(request: NextRequest) {
  const session = await getServerSession();
  const user = session?.user;

  if (!user) {
    return Response.json(
      {
        message: "Unauthorized",
      },
      { status: 401 }
    );
  }

  const jsonRequest = await request.json();

  const userToCreate = {
    email: jsonRequest.email,
    password: jsonRequest.password,
    name: jsonRequest.name,
  };

  if (!userToCreate.email || !userToCreate.password || !userToCreate.name) {
    return Response.json(
      {
        message: "Missing fields",
      },
      { status: 400 }
    );
  }

  const userCredential = await createUserWithEmailAndPassword(
    auth,
    userToCreate.email,
    userToCreate.password
  );
  const docRef = await addDoc(collection(firestore, "doctors"), {
    name: userToCreate.name,
    email: userToCreate.email,
    id: userCredential.user?.uid,
  });

  return Response.json({
    message: "User created",
    data: {
      id: docRef.id,
      user: {
        name: userToCreate.name,
        email: userToCreate.email,
        id: userCredential.user?.uid,
      },
    },
  });
}
