export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-[9999]">
      <div className="w-10 h-10 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}
