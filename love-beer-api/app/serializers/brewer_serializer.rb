class BrewerSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :beers, :established, :url

  def beers
    Beer.where("brewer_id = #{self.object.id}").first.name
  end
end
