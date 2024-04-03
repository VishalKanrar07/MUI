import { Typography } from "@mui/material"

export const MuiTypography = () => {
  return (
    <div>
        <Typography variant='h1'>h1 Heading</Typography>
        <Typography variant='h2'>h2 Heading</Typography>
        <Typography variant='h3'>h3 Heading</Typography>
        <Typography variant='h4'>h4 Heading</Typography>
        <Typography variant='h5'>h5 Heading</Typography>
        <Typography variant='h6'>h6 Heading</Typography>

        <Typography variant='subtitle1'>Sub title 1</Typography>
        <Typography variant='subtitle2'>Sub title 2</Typography>

        {/* below is p tag that is body1 and body2 */}
        <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptates optio voluptatibus magnam eveniet quia hic consequuntur sapiente ipsa placeat repellendus, nihil, reprehenderit nam? Laudantium quo saepe veritatis cum dolorem.</Typography>
        <Typography variant='body2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat sit aliquid, temporibus dicta rem voluptatum officiis mollitia! Ad nihil nam obcaecati, amet fuga minus, quaerat minima autem ipsam illum mollitia.</Typography>

        {/* below is h1 element using component props */}
        <Typography variant='h4' component='h1'>h4 Heading</Typography>

        {/* to give space at the bottom of an elemnt */}
        <Typography variant='h4' gutterBottom>h4 Heading</Typography>
    </div>
  )
}
