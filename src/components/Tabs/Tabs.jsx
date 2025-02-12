import { useState } from "react";
import "./Tabs.scss";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabsData = [
    {
      header: "Tab 1",
      title: "Vestiblum vel dictum ipsum?",
      content:
        "Morbi lobortis, massa ac dictum commodo, dolor ipsum dapibus massa, a fringilla ante augue eget felis. Aliquam ornare ante est, ac venenatis nunc fermentum vel. Integer vel nulla sit amet sem aliquet mollis. Nam a justo id magna semper luctus non in massa. Proin vehicula augue in felis lobortis vestibulum. Curabitur quis massa non velit tincidunt lobortis nec vitae dui.",
    },
    {
      header: "Tab 2",
      title: "Lorem ipsum dolor sit amet.",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo reiciendis id delectus recusandae laborum cum minus repellendus facere dolore voluptate pariatur explicabo impedit cupiditate, odio saepe voluptates enim quo officia totam beatae natus! Quaerat ab, quas nam ducimus mollitia officia totam maiores nihil minus odio dignissimos veritatis repudiandae non fugiat vitae neque at libero cum voluptates quibusdam, distinctio labore soluta. Unde delectus sapiente et voluptate cumque, mollitia distinctio quod! Saepe!",
    },
    {
      header: "Tab 3",
      title: "Vestiblum vel dictum ipsum?",
      content:
        "Morbi lobortis, massa ac dictum commodo, dolor ipsum dapibus massa, a fringilla ante augue eget felis. Aliquam ornare ante est, ac venenatis nunc fermentum vel. Integer vel nulla sit amet sem aliquet mollis. Nam a justo id magna semper luctus non in massa. Proin vehicula augue in felis lobortis vestibulum. Curabitur quis massa non velit tincidunt lobortis nec vitae dui.",
    },
    {
      header: "Tab 4",
      title: "Lorem ipsum dolor sit amet!",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo reiciendis id delectus recusandae laborum cum minus repellendus facere dolore voluptate pariatur explicabo impedit cupiditate, odio saepe voluptates enim quo officia totam maiores nihil minus odio dignissimos veritatis repudiandae non fugiat vitae neque at libero cum voluptates quibusdam, distinctio labore soluta. Unde delectus sapiente et voluptate cumque, mollitia distinctio quod! Saepe!",
    },
  ];

  return (
    <div className="tabs">
      <div className="tabs__list">
        {tabsData.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`tabs__button ${activeTab === index ? "is-active" : ""}`}
          >
            {tab.header}
          </button>
        ))}
      </div>

      <div className="tabs__content-wrapper">
        <div className="tabs__content" key={activeTab}>
          <h3 className="tabs__title">{tabsData[activeTab].title}</h3>
          <p className="tabs__text">{tabsData[activeTab].content}</p>
        </div>
      </div>
    </div>
  );
};

export default Tabs;