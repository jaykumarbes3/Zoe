import React from 'react';
import { Container, Box, Card, CardContent, Typography, Paper } from '@mui/material';
import './About.css'; // Import custom CSS if needed

const About = () => {
  const sections = [
    {
      title: "Our Church's History - A Place of Healing, Transformation, and Divine Encounter",
      content: `
        Zoe Fellowship, founded in 2022 in Toronto, Canada is a vibrant, spirit-filled community passionate about reconnecting 
        people with God and fostering spiritual growth. The fellowship began with a humble gathering in a living room, 
        where hearts united in worship and prayer, and has since blossomed into a thriving ministry. 
        Drawing from their 20 years of ministry experience in walking with God and serving in various countries, 
        Bro. Daniel and Sis. Sunitha have been instrumental in prophetic, healing, family Building, counseling, 
        and edifying churches.`,
    },
    {
      title: 'Reconnect with God',
      content: `
        We are passionate about restoring hearts back to God. In a world filled with distractions, Zoe Fellowship provides a sacred space for individuals and families to reconnect with their Creator. Through worship, prayer, and biblical teachings, we inspire people to draw closer to God and experience His unconditional love and presence. `,
    },
    {
      title: 'Renew, Revive, and Refine Lives',
      content: `
        At Zoe Fellowship, we believe in the power of renewal. We are committed to helping individuals renew their faith, revive their spiritual passion, and refine their lives to align with God’s purpose. Whether you are seeking a fresh start, deeper faith, or spiritual breakthrough, we are here to guide and encourage you every step of the way.`,
    },
    {
      title: 'Inspiring Transformation – Becoming God’s Dwelling Place ',
      content: `
        Our vision is not just to transform lives but to inspire individuals to become living temples of God’s presence—His dwelling place. We believe that through prayer, worship, and the Word, lives can be transformed, empowered, and filled with God’s Spirit to reflect His light in the world. `,
    },
    {
      title: 'Healing, Deliverance, and Prophetic Ministry',
      content: `Zoe is a house of healing and restoration. We believe in the power of prayer and the move of the Holy Spirit to bring healing to broken hearts, freedom from bondage, and restoration to lives. Through deliverance services and prophetic ministry, we create an atmosphere where God’s power brings breakthroughs and miracles.`,
    },
    {
      title: 'Family Guidance and Growth',
      content: `We are passionate about building strong families and relationships. Zoe Fellowship provides guidance, counseling, and resources to help families grow in faith, unity, and purpose. Whether it’s marriage support, parenting workshops, or family enrichment programs, we are committed to strengthening homes and empowering families. `,
    },
    {
      title: 'Transforming Lives, Impacting Communities',
      content: `Faith goes beyond personal transformation—it’s about making a difference in the world. At Zoe Fellowship, we are called to serve our communities, reach the lost, and empower individuals to become agents of change. Together, we share God’s love through outreach programs, missions, and acts of service.`,
    },
  ];

  return (
    <Container sx={{ py: 4 }}>
      <Paper
        elevation={3}
        sx={{
          p: 4, // Padding for the container
          borderRadius: '20px', // Rounded corners
          backgroundColor: '#ffffff', // Clean white background
          boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)', // Subtle shadow
        }}
      >
        <Typography
          variant="h4"
          component="div"
          gutterBottom
          sx={{
            textAlign: 'center',
            fontWeight: 'bold',
            color: '#333', // Custom color for the heading
            mb: 4,
          }}
        >
          About Our Church
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4, // Space between cards
          }}
        >
          {sections.map((section, index) => (
            <Card
              key={index}
              sx={{
                backgroundColor: '#f9f9f9', // Light gray background for modern design
                padding: '16px', // Additional padding for better spacing
                borderRadius: '15px', // Smooth corners
                boxShadow: 3, // Modern shadow effect
                transition: 'transform 0.3s', // Animation for hover effect
                '&:hover': {
                  transform: 'scale(1.02)', // Subtle scale effect on hover
                },
              }}
            >
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  {section.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    whiteSpace: 'pre-line', // Preserve newlines in text for readability
                  }}
                >
                  {section.content}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Paper>
    </Container>
  );
};

export default About;