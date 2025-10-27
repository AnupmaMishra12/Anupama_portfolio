import React, { useEffect, useState } from "react";

function Loader() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  if (!loading) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-slate-900 text-cyan-400 text-2xl font-semibold z-50">
      Loading… <span className="text-pink-500 ml-2">Anupama Portfolio ✨</span>
    </div>
  );
}
export default Loader;
