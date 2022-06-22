import React from "react";
import AutoComplete from "react-autocomplete";
import "./style.css";


export default function TextInputM(props) {
    const [name, setName] = React.useState("");

    const members = [
        {
          name: "Leya"
        },
        {
            name: "Dina Livro"
        },
        {
            name: "Europress"
        },
        {
          name: "Kalandraka"
        },
        {
          name: "Orfeu Negro"
        },
        {
          name: "Planeta Tangerina"
        }
      ];



    return(
        <div className="flex-col-center-vstart move-down" >
            
            <AutoComplete
                getItemValue={(item) => item.name}
                items={members.filter((member) => member.name.includes(name))}
                renderItem={(item, isHighlighted) => (
                <div
                    style={{
                    verticalAlign: "middle",
                    background: isHighlighted ? "lightgray" : "white"
                    }}
                >
                    <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                        color: "#fafafa",
                        cursor: "pointer",
                        border: "none",
                        backgroundColor: "none",
                        paddingLeft: "24px",
                        lineHeight: "34px",
                        dipslay: "inline-block"
                    }}
                    >
                    </a>
                    <div style={{ display: "inline-block", minWidth: 200 }}>
                    {item.name}
                    </div>
                </div>
                )}
                wrapperStyle={{
                    fontSize: "18px",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight:"500",
                    wordWrap: "break-word",
                    position: "relative",
                }}
                menuStyle={{
                    borderRadius: "15px",
                    border: "1px solid #ccc",
                    zIndex: 2,
                    position: "absolute",
                    top: 70,
                    left: 0,
                    overflow: "auto",
                    maxHeight: 135
                }}
                value={name || ""}
                inputProps={{
                placeholder: props.text,
                style: {
                    padding: "18px 24px 18px 24px",
                    boxSizing: "border-box",
                    borderRadius: "40px",
                    backgroundColor: "rgba(240, 242, 239, 1)",
                    width: "517px",
                    height: "64px",
                    fontSize: "18px",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight:"500",
                    wordWrap: "break-word",
                    border: "none",
                    position: "relative",
                }
                }}
                onChange={(e) => setName(e.target.value)}
                onSelect={(name) => setName(name)}
            />
        </div>
    )
}