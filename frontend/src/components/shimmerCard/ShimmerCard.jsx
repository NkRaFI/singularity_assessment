const ShimmerCard = ({ height = "10px" }) => {
    return (
        <div className="placeholder-glow">
            <div
                className="placeholder col-12 rounded"
                style={{
                    height: height
                }}
            ></div>
        </div>
    );
};

export default ShimmerCard;