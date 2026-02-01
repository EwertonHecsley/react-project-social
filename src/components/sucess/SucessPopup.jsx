import { useEffect, useState } from "react";
import s from "./sucessPopup.module.scss";

export const SuccessPopup = ({ onClose }) => {
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLeaving(true);
      setTimeout(onClose, 400);
    }, 3500);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`${s.toast} ${leaving ? s.leave : ""}`}>
      <div className={s.check}>✓</div>
      <p>Inscrito com sucesso!</p>
    </div>
  );
};
