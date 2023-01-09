export default function Index() {
  return (
    <div className="p-12 h-[100vh] max-h-[100vh] relative overflow-hidden">
      <div className="space-y-3">
        <h1 className="text-2xl font-bold tracking-[.25em] text-indigo-600 leading-[1em]">
          <span className="opacity-50 text-[.9em]">💿</span> REMIX
        </h1>
        <h2 className="italic text-4xl text-white font-bold">
          Minimal Wave Stack
        </h2>
        <p className="text-gray-400">
          <em>Vite</em> ‣ Tailwind ‣ Prettier ‣ Eslint
        </p>
      </div>

      <div
        className={`absolute top-[50%] left-[100%] -translate-x-[80%] -translate-y-[40%]`}
      >
        <div className="-scale-x-100 w-[180vh] aspect-square">
          <div className="absolute border-[115px] w-1/4 border-solid border-white border-l-0 border-b-0  aspect-square"></div>
          <div className="absolute border-[115px] w-1/4 top-1/4 left-1/4 -translate-x-[115px] -translate-y-[115px] border-solid border-white  border-l-0 border-b-0  aspect-square"></div>
          <div className="absolute border-[115px] w-1/4 top-2/4 left-2/4 -translate-x-[calc(2*115px)] -translate-y-[calc(2*115px)] border-solid border-white  border-l-0 border-b-0  aspect-square"></div>
          <div className="absolute border-[115px] w-1/4 top-3/4 left-3/4 -translate-x-[calc(3*115px)] -translate-y-[calc(3*115px)] border-solid border-white  border-l-0 border-b-0  aspect-square"></div>
        </div>
      </div>
    </div>
  );
}
