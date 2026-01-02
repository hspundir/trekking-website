export default function Contact() {
  return (
    <div className="max-w-lg">
      <h2 className="text-3xl font-bold text-green-700 mb-4">Contact Us</h2>
      <form className="space-y-4">
        <input className="w-full border p-3 rounded" placeholder="Name" />
        <input className="w-full border p-3 rounded" placeholder="Email" />
        <textarea className="w-full border p-3 rounded" placeholder="Message"></textarea>
        <button className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800">
          Send
        </button>
      </form>
    </div>
  );
}