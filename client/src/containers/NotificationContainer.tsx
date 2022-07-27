import Notification from "../components/Notification";

export default function NotificationContainer() {
    return (
      <div className="bg-slate-300 h-screen flex w-full flex-col items-center gap-2">
        {[1, 2, 3, 4,5,6,7,8,8,9,9,0,1].map(() => (
        <Notification />
      ))}
      </div>
    );
  }
  