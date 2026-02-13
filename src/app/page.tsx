import { Card, Button } from 'framer-motion';
import { motion } from 'framer-motion';
import { Icon } from 'lucide-react';

const Portfolio = () => {
    return (
        <div>
            <Card>
                <h1>My Portfolio</h1>
                <Button>
                    <Icon name="link" /> Visit
                </Button>
            </Card>
        </div>
    );
};

export default Portfolio;