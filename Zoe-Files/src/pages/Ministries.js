import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './Ministries.css';

const Ministries = () => {
  const [show, setShow] = useState(false);
  const [selectedMinistry, setSelectedMinistry] = useState(null);

  const ministries = [
    {
      name: 'Zoe - Fellowship',
      description:
        'Zoe Fellowship is a house of healing and restoration. We believe in the power of prayer and the move of the Holy Spirit to bring healing to broken hearts, freedom from bondage, and restoration to lives. Through deliverance services and prophetic ministry, we create an atmosphere where God’s power brings breakthroughs and miracles. Family Guidance and Growth We are passionate about building strong families and relationships. Zoe Fellowship provides guidance, counseling, and resources to help families grow in faith, unity, and purpose. Whether it’s marriage support, Spiritual Walk with God or family enrichment programs, we are committed to strengthening homes and empowering families.',
      image: './EventsPic.jpg',
    },
    {
      name: 'Zoe - Daughters of the King',
      description:
        'Zoe Daughters of the King is the womens wing of Zoe International Ministries, where the focus is on empowering women to seek God with passion and purpose through prayer, encouragement, and deepening their relationship with Him.In this vibrant community, women come together for fasting, prayer, and a commitment to dive deeper into God’s Word. The gatherings are marked by powerful moments of worship, intercession, and personal transformation. Through this ministry, we have witnessed prayers answered, miracles take place, and faith brought to life in profound ways.Zoe Daughters of the King serves as a spiritual hub where women are encouraged to grow in their faith, support one another, and ignite a passion for God’s presence. It is a place where women are equipped to live out their faith boldly, share God’s love, and experience the power of prayer in action. By nurturing a heart of devotion and a commitment to seeking God’s will, Zoe: Daughters of the King is helping women become powerful agents of change in their families, churches, and communities.',
      image: '/WomensMinistry.jpg',
    },
    {
      name: 'Zoe International Ministries',
      description:
        'Transforming Lives, Impacting Communities, Building His Kingdom : At Zoe International Ministries, we believe that faith is not just about personal transformation—it is about making a lasting impact in the world. Our mission extends beyond the walls of our fellowship to serve communities globally, empowering ministries, supporting church planting, and providing discipleship training in various countries like India, Saudi Arabia, Dubai, Canada, USA. We are committed to being agents of change, sharing God’s love and message of hope through outreach programs, missions, and acts of service. By reaching the lost, supporting those in need, and nurturing leaders to spread the gospel, we seek to build God’s Kingdom here on earth. Together, with the power of the Holy Spirit, we aim to bring transformation and healing, impacting lives and communities for His glory.Through Zoe International Ministries, we are making a difference in the world—one life, one community, and one nation at a time.',
      image: '/Outreach.jpg',
    },
  ];

  const handleShow = (ministry) => {
    setSelectedMinistry(ministry);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <div className={`ministries-container ${show ? 'expanded' : ''}`}>
      <h2>Our Ministries</h2>
      <div className="ministries-grid">
        {ministries.map((ministry, index) => (
          <div className="ministry-card" key={index} onClick={() => handleShow(ministry)}>
            <img src={ministry.image} alt={ministry.name} className="ministry-image" />
            <h3>{ministry.name}</h3>
            <p>{ministry.description.substring(0, 100)}...</p>
            <Button variant="primary">Learn More</Button>
          </div>
        ))}
      </div>

      {selectedMinistry && (
        <Modal
          show={show}
          onHide={handleClose}
          centered
          dialogClassName="custom-modal" // Add a custom class for modal
        >
          <Modal.Header closeButton>
            <Modal.Title>{selectedMinistry.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={selectedMinistry.image} alt={selectedMinistry.name} className="modal-image" />
            <p>{selectedMinistry.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default Ministries;