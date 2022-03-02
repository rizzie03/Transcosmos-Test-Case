import React from "react";
import Card1 from "../assets/Card-1.png";
import Card2 from "../assets/Card-2.png";
import Card3 from "../assets/Card-3.png";
import Avatar1 from "../assets/Avatar-1.png";
import Avatar2 from "../assets/Avatar-2.png";
import Avatar3 from "../assets/Avatar-3.png";
import Union from "../assets/Union.png";
import Rating from "@mui/material/Rating";

export default function Avatar() {
  const [value, setValue] = React.useState(2);

  return (
    <>
      <div className='avatar1'>
        <img
          src={Card1}
          style={{
            width: "25vw",
            position: "absolute",
            top: "82rem",
            left: "10.95rem",
          }}
        />
        <img
          src={Union}
          style={{
            width: "21.3rem",
            position: "absolute",
            top: "96.1rem",
            left: "12.2rem",
            backgroundColor: "transparent",
          }}
        />
        <img
          src={Avatar1}
          style={{
            position: "absolute",
            top: "96.5rem",
            left: "21.4rem",
            verticalAlign: "middle",
            width: "3rem",
            height: "3rem",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
        <h1
          style={{
            position: "absolute",
            top: "100rem",
            left: "20.2rem",
            backgroundColor: "transparent",
            fontSize: "18px",
            fontWeight: "Bold",
            fontFamily: "Gilroy-Bold, sans-serif",
          }}>
          Bang Upin
        </h1>
        <h1
          style={{
            position: "absolute",
            top: "102rem",
            left: "19.2rem",
            backgroundColor: "transparent",
            color: "grey",
            fontSize: "13px",
            fontWeight: "thin",
            fontFamily: "Gilroy-Light, sans-serif",
            //   letterSpacing: "6px",
          }}>
          Pedagang Asongan
        </h1>
        <h1
          style={{
            position: "absolute",
            top: "105rem",
            left: "16rem",
            textAlign: "center",
            backgroundColor: "transparent",
            color: "grey",
            fontSize: "13px",
            fontWeight: "thin",
            fontFamily: "Gilroy-Light, sans-serif",
            //   letterSpacing: "6px",
          }}>
          “Terimakasih banyak, kini ruanganku <br /> menjadi lebih mewah dan
          terlihat
          <br /> mahal“
        </h1>
        <Rating
          name='size-small'
          defaultValue={4}
          readOnly={value}
          size='small'
          sx={{
            position: "absolute",
            top: "108.5rem",
            left: "19.75rem",
            backgroundColor: "transparent",
          }}
        />
        <Rating
          name='size-small'
          defaultValue={5}
          readOnly={value}
          disabled={true}
          size='small'
          sx={{
            position: "absolute",
            top: "108.5rem",
            left: "19.75rem",
            backgroundColor: "transparent",
          }}
        />
      </div>
      <div className='avatar2'>
        <img
          src={Card2}
          style={{
            width: "25vw",
            position: "absolute",
            top: "82rem",
            left: "36.5rem",
          }}
        />
        <img
          src={Union}
          style={{
            width: "21.3rem",
            position: "absolute",
            top: "96.1rem",
            left: "38rem",
            backgroundColor: "transparent",
          }}
        />
        <img
          src={Avatar2}
          style={{
            position: "absolute",
            top: "96.5rem",
            left: "47.2rem",
            verticalAlign: "middle",
            width: "3rem",
            height: "3rem",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
        <h1
          style={{
            position: "absolute",
            top: "100rem",
            left: "45.7rem",
            backgroundColor: "transparent",
            fontSize: "18px",
            fontWeight: "Bold",
            fontFamily: "Gilroy-Bold, sans-serif",
          }}>
          Ibuk Sukijan
        </h1>
        <h1
          style={{
            position: "absolute",
            top: "102rem",
            left: "45.4rem",
            backgroundColor: "transparent",
            color: "grey",
            fontSize: "13px",
            fontWeight: "thin",
            fontFamily: "Gilroy-Light, sans-serif",
          }}>
          Ibu Rumah Tangga
        </h1>
        <h1
          style={{
            position: "absolute",
            top: "105rem",
            left: "41.7rem",
            textAlign: "center",
            backgroundColor: "transparent",
            color: "grey",
            fontSize: "13px",
            fontWeight: "thin",
            fontFamily: "Gilroy-Light, sans-serif",
          }}>
          “Makasih Panto, aku sekarang berasa <br /> tinggal di apartment karena
          barang-
          <br />
          barang yang terlihat mewah“
        </h1>
        <Rating
          name='size-small'
          defaultValue={4}
          readOnly={value}
          size='small'
          sx={{
            position: "absolute",
            top: "108.5rem",
            left: "45.8rem",
            backgroundColor: "transparent",
          }}
        />
        <Rating
          name='size-small'
          defaultValue={5}
          readOnly={value}
          disabled={true}
          size='small'
          sx={{
            position: "absolute",
            top: "108.5rem",
            left: "45.8rem",
            backgroundColor: "transparent",
          }}
        />
      </div>
      <div className='avatar3'>
        <img
          src={Card3}
          style={{
            width: "25vw",
            position: "absolute",
            top: "82rem",
            left: "62rem",
          }}
        />
        <img
          src={Union}
          style={{
            width: "21.3rem",
            position: "absolute",
            top: "96.1rem",
            left: "63.5rem",
            backgroundColor: "transparent",
          }}
        />
        <img
          src={Avatar3}
          style={{
            position: "absolute",
            top: "96.5rem",
            left: "72.75rem",
            verticalAlign: "middle",
            width: "3rem",
            height: "3rem",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
        <h1
          style={{
            position: "absolute",
            top: "100rem",
            left: "71.8rem",
            backgroundColor: "transparent",
            fontSize: "18px",
            fontWeight: "Bold",
            fontFamily: "Gilroy-Bold, sans-serif",
          }}>
          Mpok Ina
        </h1>
        <h1
          style={{
            position: "absolute",
            top: "102rem",
            left: "70.9rem",
            backgroundColor: "transparent",
            color: "grey",
            fontSize: "13px",
            fontWeight: "thin",
            fontFamily: "Gilroy-Light, sans-serif",
          }}>
          Karyawan Swasta
        </h1>
        <h1
          style={{
            position: "absolute",
            top: "105rem",
            left: "68.1rem",
            textAlign: "center",
            backgroundColor: "transparent",
            color: "grey",
            fontSize: "13px",
            fontWeight: "thin",
            fontFamily: "Gilroy-Light, sans-serif",
          }}>
          “Sangat terjangkau untuk kantong
          <br /> saya yang tidak terlalu banyak“
        </h1>
        <Rating
          name='size-small'
          defaultValue={4}
          readOnly={value}
          size='small'
          sx={{
            position: "absolute",
            top: "108.5rem",
            left: "71.55rem",
            backgroundColor: "transparent",
          }}
        />
        <Rating
          name='size-small'
          defaultValue={5}
          readOnly={value}
          disabled={true}
          size='small'
          sx={{
            position: "absolute",
            top: "108.5rem",
            left: "71.55rem",
            backgroundColor: "transparent",
          }}
        />
      </div>
    </>
  );
}
