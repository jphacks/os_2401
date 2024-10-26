import { Layout } from "../Layout";
import { useFetchMeeting } from "../../hooks/useFetchMeeting";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import san_ticket from "./theater_img/tick/san_ticket.svg";
import syu_ticket from "./theater_img/tick/syu_ticket.svg";
import ryou_ticket from "./theater_img/tick/ryou_tcket.svg";
import ryou_ticket_done from "./theater_img/tick/ryou_ticket_done.svg";
import san_ticket_done from "./theater_img/tick/san_ticket_done.svg";
import syu_ticket_done from "./theater_img/tick/syu_ticket_done.svg";

var path = import.meta.env.VITE_APP_MEETING_PATH;

interface Entity {
  IssueId: string;
}

export const History = () => {
  const navigate = useNavigate();
  const url = path + "select/all";
  const { meeting, error, isLoading } = useFetchMeeting(url);
  const [use, setUse] = useState<string[]>([]);

  const join = (IssueId: string) => {
    const entity: Entity = {
      IssueId: IssueId,
    };

    // 現在のuse配列を取得
    const currentUse = JSON.parse(sessionStorage.getItem("use") || "[]");

    // 新しい値を追加
    const updatedUse = [...currentUse, entity.IssueId];

    // セッションストレージに保存
    sessionStorage.setItem("use", JSON.stringify(updatedUse));
    setUse(updatedUse); // useの状態を更新

    navigate("/theater", { state: entity });
  };

  useEffect(() => {
    setUse(JSON.parse(sessionStorage.getItem("use") || "[]"));
  }, []);

  return (
    <Layout>
      {/* TODO: ローディングインディケータをちゃんと作る */}
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {/* {meeting && (
        <div>
          <div className="mt-4 max-h-[80%] overflow-y-auto lg:mt-10">
            <table className="table mx-auto w-full rounded-b-none bg-white">
              <thead className="">
                <tr className="border-gray-100 text-center text-base">
                  <th className="w-5/6 text-xs text-gray-400 lg:w-3/6 lg:text-xl">
                    議題
                  </th>
                  <th className="hidden w-1/6 text-xs text-gray-400 lg:table-cell lg:text-xl">
                    政党
                  </th>
                  <th className="hidden w-1/6 text-xs text-gray-400 lg:table-cell lg:text-xl">
                    日付
                  </th>
                  <th className="w-1/6 text-xs text-gray-400 lg:text-xl"></th>
                </tr>
              </thead>
              <tbody>
                {meeting.map((m) => (
                  <tr key={m.ID}>
                    <td className="text-xs text-gray-400 lg:text-xl">
                      {m.NameOfMeeting}
                    </td>
                    <td className="hidden text-xs text-gray-400 lg:table-cell lg:text-xl">
                      {m.NameOfHouse}
                    </td>
                    <td className="hidden text-xs text-gray-400 lg:table-cell lg:text-xl">
                      {m.Date}
                    </td>
                    <td className="rounded-br-xl p-0 px-1 py-3 text-xs lg:text-lg">
                      <button
                        type="button"
                        className="mx-auto flex items-center rounded-md border-2 border-green-500 bg-green-100 px-1 py-1 text-xs text-green-500 lg:px-8"
                        onClick={() => join(m.IssueID)}
                      >
                        入場
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )} */}
      {meeting && (
        <div className="mx-6 mt-8 grid items-center justify-center rounded-3xl bg-subwhite md:mx-16 md:grid-cols-2 lg:grid-cols-3">
          {meeting.map((m, index) => (
            <div
              key={m.ID || index}
              className="relative overflow-hidden px-6 py-4 md:p-10"
            >
              <button onClick={() => join(m.IssueID)}>
                {use.includes(m.IssueID) ? (
                  m.NameOfHouse === "参議院" ? (
                    <img src={san_ticket_done} alt="" className="w-[100%]" />
                  ) : m.NameOfHouse === "衆議院" ? (
                    <img src={syu_ticket_done} alt="" className="w-[100%]" />
                  ) : m.NameOfHouse === "両院" ? (
                    <img src={ryou_ticket_done} alt="" className="w-[100%]" />
                  ) : (
                    <img src="" alt="" />
                  )
                ) : m.NameOfHouse === "参議院" ? (
                  <img src={san_ticket} alt="" className="w-[100%]" />
                ) : m.NameOfHouse === "衆議院" ? (
                  <img src={syu_ticket} alt="" className="w-[100%]" />
                ) : m.NameOfHouse === "両院" ? (
                  <img src={ryou_ticket} alt="" className="w-[100%]" />
                ) : (
                  <img src="" alt="" />
                )}
              </button>
              <div className="md:text-md hidden-scrollbar absolute left-[18%] top-[20%] z-10 h-1/3 w-[44%] overflow-auto text-sm md:left-[20%] md:top-[30%] md:w-[40%]">
                <div className="block">
                  <>第{m.Session}回&emsp;</>
                  <div className="w-[70%]" onClick={() => join(m.IssueID)}>
                    {m.NameOfMeeting}
                  </div>
                </div>
              </div>

              <div className="absolute bottom-10 right-[calc(2.5rem+20%)] text-sm text-current md:bottom-[26%] md:text-base">
                <>{m.Date}</>
              </div>
            </div>
          ))}
        </div>
      )}
    </Layout>
  );
};
