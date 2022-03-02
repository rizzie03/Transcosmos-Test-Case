import * as React from "react";
import "./Cards.module.scss";

import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { loadCSS } from "fg-loadcss";
import Box from "@mui/material/Box";
import { green } from "@mui/material/colors";
import Icon from "@mui/material/Icon";
import PlusIcon from "../assets/circle-plus-solid.svg";

import Chair1 from "../assets/Chair-1.png";
import Chair2 from "../assets/Chair-2.png";
import Chair3 from "../assets/Chair-3.png";
import Chair4 from "../assets/Chair-4.png";
import { maxHeight } from "@mui/system";

export default function RecipeReviewCard() {
  React.useEffect(() => {
    const node = loadCSS(
      "https://use.fontawesome.com/releases/v5.14.0/css/all.css",
      // Inject before JSS
      document.querySelector("#font-awesome-css") || document.head.firstChild
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);

  return (
    <>
      <Box display='flex' flexDirection='row' justifyContent='space-evenly'>
        <Card sx={{ maxWidth: 200, maxHeight: 350 }}>
          <CardMedia
            component='img'
            height='vh'
            width='vw'
            image={Chair1}
            sx={{ backgroundSize: "cover", transform: "scaleX(-1)" }}
            alt='Chair'
          />
          <CardContent>
            <Typography
              variant='body2'
              color='text.disabled'
              fontSize='0.75rem'>
              Chair
            </Typography>
            <Typography
              variant='body2'
              color='#0D1B39'
              fontSize='1rem'
              fontWeight='bold'>
              Sakarias Armchair
            </Typography>
            <Rating name='size-small' defaultValue={5} size='small' />
          </CardContent>
          <CardActions>
            <Box
              aria-label='add to favorites'
              display='flex'
              flexDirection='row'
              marginLeft='0.5rem'>
              <Stack>
                <Typography
                  variant='body2'
                  color='#0D1B39'
                  fontSize='0.70rem'
                  fontWeight='bold'>
                  $
                </Typography>
              </Stack>
              <Typography
                variant='body2'
                color='#0D1B39'
                fontSize='1rem'
                fontWeight='bold'>
                392
              </Typography>
              <Stack paddingLeft={12}>
                <img
                  style={{
                    width: "85%",
                    height: "85%",
                    marginTop: "-0.50rem",
                    marginBottom: "0.50rem",
                  }}
                  src={PlusIcon}
                  alt=''
                />
              </Stack>
            </Box>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 200, maxHeight: 350 }}>
          <CardMedia
            component='img'
            height='vh'
            width='vw'
            image={Chair2}
            sx={{ backgroundSize: "cover", transform: "scaleX(-1)" }}
            alt='Chair'
          />
          <CardContent>
            <Typography
              variant='body2'
              color='text.disabled'
              fontSize='0.75rem'>
              Chair
            </Typography>
            <Typography
              variant='body2'
              color='#0D1B39'
              fontSize='1rem'
              fontWeight='bold'>
              Baltsar Chair
            </Typography>
            <Rating name='size-small' defaultValue={5} size='small' />
          </CardContent>
          <CardActions>
            <Box
              aria-label='add to favorites'
              display='flex'
              flexDirection='row'
              marginLeft='0.5rem'>
              <Stack>
                <Typography
                  variant='body2'
                  color='#0D1B39'
                  fontSize='0.70rem'
                  fontWeight='bold'>
                  $
                </Typography>
              </Stack>
              <Typography
                variant='body2'
                color='#0D1B39'
                fontSize='1rem'
                fontWeight='bold'>
                299
              </Typography>
              <Stack paddingLeft={12}>
                <img
                  style={{
                    width: "85%",
                    height: "85%",
                    marginTop: "-0.50rem",
                    marginBottom: "0.50rem",
                  }}
                  src={PlusIcon}
                  alt=''
                />
              </Stack>
            </Box>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 200, maxHeight: 350 }}>
          <CardMedia
            component='img'
            height='57%'
            width='vw'
            image={Chair3}
            sx={{ backgroundSize: "cover", transform: "scaleX(-1)" }}
            alt='Chair'
          />
          <CardContent>
            <Typography
              variant='body2'
              color='text.disabled'
              fontSize='0.75rem'>
              Chair
            </Typography>
            <Typography
              variant='body2'
              color='#0D1B39'
              fontSize='1rem'
              fontWeight='bold'>
              Anjay Chair
            </Typography>
            <Rating name='size-small' defaultValue={5} size='small' />
          </CardContent>
          <CardActions>
            <Box
              aria-label='add to favorites'
              display='flex'
              flexDirection='row'
              marginLeft='0.5rem'>
              <Stack>
                <Typography
                  variant='body2'
                  color='#0D1B39'
                  fontSize='0.70rem'
                  fontWeight='bold'>
                  $
                </Typography>
              </Stack>
              <Typography
                variant='body2'
                color='#0D1B39'
                fontSize='1rem'
                fontWeight='bold'>
                519
              </Typography>
              <Stack paddingLeft={12}>
                <img
                  style={{
                    width: "85%",
                    height: "85%",
                    marginTop: "-0.50rem",
                    marginBottom: "0.50rem",
                  }}
                  src={PlusIcon}
                  alt=''
                />
              </Stack>
            </Box>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 200, maxHeight: 350 }}>
          <CardMedia
            component='img'
            height='vh'
            width='vw'
            image={Chair4}
            sx={{ backgroundSize: "cover", transform: "scaleX(-1)" }}
            alt='Chair'
          />
          <CardContent>
            <Typography
              variant='body2'
              color='text.disabled'
              fontSize='0.75rem'>
              Chair
            </Typography>
            <Typography
              variant='body2'
              color='#0D1B39'
              fontSize='1rem'
              fontWeight='bold'>
              Nyantuy Chair
            </Typography>
            <Rating name='size-small' defaultValue={5} size='small' />
          </CardContent>
          <CardActions>
            <Box
              aria-label='add to favorites'
              display='flex'
              flexDirection='row'
              marginLeft='0.5rem'>
              <Stack>
                <Typography
                  variant='body2'
                  color='#0D1B39'
                  fontSize='0.70rem'
                  fontWeight='bold'>
                  $
                </Typography>
              </Stack>
              <Typography
                variant='body2'
                color='#0D1B39'
                fontSize='1rem'
                fontWeight='bold'>
                921
              </Typography>
              <Stack paddingLeft={12}>
                <img
                  style={{
                    width: "85%",
                    height: "85%",
                    marginTop: "-0.50rem",
                    marginBottom: "0.50rem",
                  }}
                  src={PlusIcon}
                  alt=''
                />
              </Stack>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}

{
  /* <Icon
  baseClassName='fas'
  className='fa-solid fa-plus-circle'
  sx={{ color: "#0D1B39", fontSize: "8" }}
/> */
}

// export default function FontAwesomeIcon() {

//   return (
//     <Box
//       sx={{
//         '& > :not(style)': {
//           m: 2,
//         },
//       }}
//     >
//       <Icon baseClassName="fas" className="fa-plus-circle" />
//       <Icon baseClassName="fas" className="fa-plus-circle" color="primary" />

//       <Icon baseClassName="fas" className="fa-plus-circle" fontSize="small" />
//       <Icon baseClassName="fas" className="fa-plus-circle" sx={{ fontSize: 30 }} />
//     </Box>
//   );
// }
