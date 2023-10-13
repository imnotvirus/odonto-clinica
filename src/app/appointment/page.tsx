import AppointmentForm from "@/components/Form/Appointment";
import Header from "@/components/Header";

const AppointmentPage = () => {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col ">
      <Header />
      <main className="flex flex-col flex-1 justify-center    sm:px-6 lg:px-8">
        <header className="sm:mx-auto sm:w-full sm:max-w-md">
          <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Schedule an Appointment
          </h1>
        </header>

        <section className="p-2 sm:mx-auto sm:w-full sm:max-w-md flex flex-col justify-center py-6 sm:px-6 lg:px-8">
          <div className="bg-white py-8 px-4 shadow rounded-lg sm:px-10">
            <AppointmentForm />
          </div>
        </section>
      </main>
    </main>
  );
};

export default AppointmentPage;
