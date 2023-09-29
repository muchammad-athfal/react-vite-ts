type ButtonProps = {
  variant: string;
};
const Button = ({ variant }: ButtonProps) => {
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md bg-${variant}-700 text-white`}
      type="submit"
    >
      Button
    </button>
  );
};

function App() {
  return (
    <>
      <div className="flex justify-center bg-blue-500 min-h-screen items-center">
        <Button variant={'red'} />
      </div>
    </>
  );
}

export default App;
